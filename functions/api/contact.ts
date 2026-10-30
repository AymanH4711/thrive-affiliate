// functions/api/contact.ts
//
// Server-side contact form endpoint. The browser submits the form here; this
// Function verifies the Cloudflare Turnstile token and then sends the message
// through EmailJS. Keeping the EmailJS request server-side means bots cannot
// skip the browser form and call EmailJS with the public site key.
//
// Required in Cloudflare Pages:
//   TURNSTILE_SECRET_KEY
//   EMAILJS_PUBLIC_KEY (or VITE_EMAILJS_PUBLIC_KEY)
//   EMAILJS_SERVICE_ID_CONTACT (or VITE_EMAILJS_SERVICE_ID_CONTACT)
//   EMAILJS_TEMPLATE_ID_CONTACT (or VITE_EMAILJS_TEMPLATE_ID_CONTACT)
// Optional:
//   EMAILJS_PRIVATE_KEY

interface Env {
  TURNSTILE_SECRET_KEY?: string;

  EMAILJS_PUBLIC_KEY?: string;
  EMAILJS_PRIVATE_KEY?: string;
  EMAILJS_SERVICE_ID_CONTACT?: string;
  EMAILJS_TEMPLATE_ID_CONTACT?: string;
  EMAILJS_SERVICE_ID?: string;
  EMAILJS_TEMPLATE_ID?: string;

  VITE_EMAILJS_PUBLIC_KEY?: string;
  VITE_EMAILJS_SERVICE_ID_CONTACT?: string;
  VITE_EMAILJS_TEMPLATE_ID_CONTACT?: string;
  VITE_EMAILJS_SERVICE_ID?: string;
  VITE_EMAILJS_TEMPLATE_ID?: string;
}

interface ContactRequestBody {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  company?: string; // honeypot; must stay empty
  turnstileToken?: string;
}

interface TurnstileVerifyResponse {
  success: boolean;
  action?: string;
  'error-codes'?: string[];
}

const JSON_HEADERS = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store',
};

const TURNSTILE_TIMEOUT_MS = 8000;

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: JSON_HEADERS,
  });
}

function isTimeoutError(error: unknown): boolean {
  if (!error || typeof error !== 'object') return false;
  const name = (error as { name?: unknown }).name;
  return name === 'TimeoutError' || name === 'AbortError';
}

type BotRejectionReason =
  | 'honeypot_hit'
  | 'turnstile_secret_missing'
  | 'turnstile_token_invalid'
  | 'turnstile_siteverify_error'
  | 'turnstile_rejected'
  | 'turnstile_action_mismatch';

function formatErrorCodes(codes: unknown): string | undefined {
  if (Array.isArray(codes)) {
    const values = codes.filter(
      (code): code is string => typeof code === 'string' && code.length > 0
    );
    return values.length ? values.join(',') : undefined;
  }
  if (typeof codes === 'string' && codes) return codes;
  return undefined;
}

function logBotRejection(
  reason: BotRejectionReason,
  details: Record<string, string | number | undefined> = {},
  level: 'warn' | 'error' = 'warn'
): void {
  const fields = Object.entries(details)
    .filter(([, value]) => value !== undefined && value !== '')
    .map(([key, value]) => {
      const text = String(value);
      const safe = /^[A-Za-z0-9_.:/-]+$/.test(text)
        ? text
        : JSON.stringify(text);
      return `${key}=${safe}`;
    })
    .join(' ');
  const line = `[contact] bot_rejection reason=${reason}${
    fields ? ` ${fields}` : ''
  }`;

  if (level === 'error') {
    console.error(line);
  } else {
    console.warn(line);
  }
}

async function verifyTurnstile(
  secret: string,
  token: string,
  remoteIp: string | null,
  expectedAction: string
): Promise<boolean> {
  if (!secret || !secret.trim()) {
    logBotRejection('turnstile_secret_missing', {}, 'error');
    return false;
  }

  if (!token || !token.trim()) {
    logBotRejection('turnstile_token_invalid', { detail: 'missing' });
    return false;
  }

  try {
    const formData = new URLSearchParams({
      secret,
      response: token,
    });
    if (remoteIp) {
      formData.set('remoteip', remoteIp);
    }

    const response = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
        signal: AbortSignal.timeout(TURNSTILE_TIMEOUT_MS),
      }
    );

    let data: TurnstileVerifyResponse;
    try {
      data = (await response.json()) as TurnstileVerifyResponse;
    } catch {
      logBotRejection(
        'turnstile_siteverify_error',
        { detail: 'malformed_json', status: response.status },
        'error'
      );
      return false;
    }

    if (!data || typeof data !== 'object') {
      logBotRejection(
        'turnstile_siteverify_error',
        { detail: 'unexpected_body', status: response.status },
        'error'
      );
      return false;
    }

    if (!response.ok) {
      logBotRejection(
        'turnstile_siteverify_error',
        {
          detail: 'http_error',
          status: response.status,
          error_codes: formatErrorCodes(data['error-codes']),
        },
        'error'
      );
      return false;
    }

    if (data.success !== true) {
      logBotRejection('turnstile_rejected', {
        error_codes: formatErrorCodes(data['error-codes']),
      });
      return false;
    }

    if (expectedAction && data.action && data.action !== expectedAction) {
      logBotRejection('turnstile_action_mismatch', {
        expected: expectedAction,
        actual: data.action,
      });
      return false;
    }

    return true;
  } catch (error) {
    if (isTimeoutError(error)) {
      logBotRejection(
        'turnstile_siteverify_error',
        { detail: 'timeout', timeout_ms: TURNSTILE_TIMEOUT_MS },
        'error'
      );
    } else {
      logBotRejection(
        'turnstile_siteverify_error',
        {
          detail: 'network',
          error_name: error instanceof Error ? error.name : 'unknown',
        },
        'error'
      );
    }
    return false;
  }
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  let body: ContactRequestBody;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ success: false, message: 'Invalid request body' }, 400);
  }

  // Honeypot first: a filled field is obviously bot traffic. Return a silent
  // 200 and skip Turnstile/EmailJS entirely so bots learn nothing and we do
  // not spend a siteverify call on them.
  const honeypot = typeof body.company === 'string' ? body.company.trim() : '';

  if (honeypot) {
    logBotRejection('honeypot_hit');
    // Pretend the message was accepted so simple bots do not learn what failed.
    return jsonResponse({ success: true, message: 'Message received.' });
  }

  const name = typeof body.name === 'string' ? body.name.trim().slice(0, 100) : '';
  const email = typeof body.email === 'string' ? body.email.trim().slice(0, 320) : '';
  const subject = typeof body.subject === 'string' ? body.subject.trim().slice(0, 200) : '';
  const message = typeof body.message === 'string' ? body.message.trim().slice(0, 5000) : '';

  // Fail closed: after the honeypot, every submission must pass Turnstile
  // before any other processing. verifyTurnstile rejects a missing/empty
  // secret without making a siteverify request, so a misconfigured deployment
  // cannot accept mail.
  const token =
    typeof body.turnstileToken === 'string' ? body.turnstileToken : '';
  const valid = await verifyTurnstile(
    env.TURNSTILE_SECRET_KEY || '',
    token,
    request.headers.get('CF-Connecting-IP'),
    'contact'
  );

  if (!valid) {
    return jsonResponse(
      {
        success: false,
        message: 'Security check failed. Please refresh the page and try again.',
      },
      403
    );
  }

  if (!name || !subject || !message) {
    return jsonResponse(
      { success: false, message: 'Name, subject, and message are required.' },
      400
    );
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse(
      { success: false, message: 'A valid email is required.' },
      400
    );
  }

  const serviceId =
    env.EMAILJS_SERVICE_ID_CONTACT ||
    env.VITE_EMAILJS_SERVICE_ID_CONTACT ||
    env.EMAILJS_SERVICE_ID ||
    env.VITE_EMAILJS_SERVICE_ID;
  const templateId =
    env.EMAILJS_TEMPLATE_ID_CONTACT ||
    env.VITE_EMAILJS_TEMPLATE_ID_CONTACT ||
    env.EMAILJS_TEMPLATE_ID ||
    env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = env.EMAILJS_PUBLIC_KEY || env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.warn('contact function: EmailJS is not fully configured.');
    return jsonResponse(
      {
        success: false,
        emailConfigured: false,
        emailClientFallback: true,
        message: 'Email delivery is not configured.',
      },
      200
    );
  }

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        ...(env.EMAILJS_PRIVATE_KEY
          ? { accessToken: env.EMAILJS_PRIVATE_KEY }
          : {}),
        template_params: {
          name,
          from_name: name,
          email,
          user_email: email,
          reply_to: email,
          subject,
          message,
          page_url: 'https://thrivehealth360.org/contact',
          source: 'contact-form',
        },
      }),
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      console.error(
        'EmailJS contact error:',
        response.status,
        (await response.text()).slice(0, 300)
      );
      return jsonResponse(
        {
          success: false,
          emailConfigured: true,
          emailClientFallback: true,
          message: 'Message could not be sent. Please try again later.',
        },
        502
      );
    }

    return jsonResponse({
      success: true,
      message: 'Message received.',
    });
  } catch (error) {
    console.error('EmailJS contact error:', error);
    return jsonResponse(
      {
        success: false,
        emailConfigured: true,
        emailClientFallback: true,
        message: 'Message could not be sent. Please try again later.',
      },
      502
    );
  }
};

export const onRequest: PagesFunction<Env> = async () => {
  return jsonResponse({ success: false, message: 'Method not allowed' }, 405);
};
