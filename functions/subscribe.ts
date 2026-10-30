// functions/subscribe.ts
//
// Cloudflare Pages Function — replaces netlify/functions/subscribe.ts.
// File-based routing: this file living at functions/subscribe.ts makes it
// respond to requests at /subscribe automatically, no extra config needed.
//
// Security:
//   BREVO_API_KEY          server-side Brevo key (never VITE_-prefixed)
//   TURNSTILE_SECRET_KEY   Cloudflare Turnstile secret (never VITE_-prefixed).
//                          Required: requests fail closed when it is missing.
//
// Optional EmailJS server-side configuration. VITE_ names are accepted as
// fallbacks because Cloudflare Pages exposes project variables to Functions:
//   EMAILJS_PUBLIC_KEY
//   EMAILJS_PRIVATE_KEY (optional, recommended if enabled in EmailJS)
//   EMAILJS_SERVICE_ID_LEADMAGNET / EMAILJS_TEMPLATE_ID_LEADMAGNET
//   EMAILJS_SERVICE_ID / EMAILJS_TEMPLATE_ID (aliases)
//
// When EmailJS is configured, the lead email is sent from this Function instead
// of the browser. The response tells the frontend whether that configuration
// is complete so it can use its legacy fallback during a migration.

interface Env {
  BREVO_API_KEY: string;
  BREVO_LIST_ID?: string;
  TURNSTILE_SECRET_KEY?: string;

  EMAILJS_PUBLIC_KEY?: string;
  EMAILJS_PRIVATE_KEY?: string;
  EMAILJS_SERVICE_ID_LEADMAGNET?: string;
  EMAILJS_TEMPLATE_ID_LEADMAGNET?: string;
  EMAILJS_SERVICE_ID?: string;
  EMAILJS_TEMPLATE_ID?: string;

  VITE_EMAILJS_PUBLIC_KEY?: string;
  VITE_EMAILJS_SERVICE_ID_LEADMAGNET?: string;
  VITE_EMAILJS_TEMPLATE_ID_LEADMAGNET?: string;
  VITE_EMAILJS_SERVICE_ID?: string;
  VITE_EMAILJS_TEMPLATE_ID?: string;
}

interface SubscribeRequestBody {
  email?: string;
  source?: string;
  name?: string;
  resourceName?: string;
  turnstileToken?: string;
  /** Honeypot; real visitors never fill this. */
  company?: string;
}

interface TurnstileVerifyResponse {
  success: boolean;
  action?: string;
  'error-codes'?: string[];
}

interface EmailResult {
  configured: boolean;
  sent: boolean;
  /** Let the browser use its legacy EmailJS path while server sending is off. */
  clientFallback: boolean;
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

async function verifyTurnstile(
  secret: string,
  token: string,
  remoteIp: string | null,
  expectedAction: string
): Promise<boolean> {
  if (!secret || !secret.trim()) {
    console.error(
      '[subscribe] Turnstile configuration error: TURNSTILE_SECRET_KEY is missing or empty. Rejecting request.'
    );
    return false;
  }

  if (!token || !token.trim()) {
    console.warn(
      '[subscribe] Turnstile token missing from request. Rejecting request.'
    );
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
      console.error(
        `[subscribe] Turnstile siteverify returned malformed JSON (HTTP ${response.status}). Rejecting request.`
      );
      return false;
    }

    if (!data || typeof data !== 'object') {
      console.error(
        `[subscribe] Turnstile siteverify returned an unexpected response body (HTTP ${response.status}). Rejecting request.`
      );
      return false;
    }

    if (!response.ok) {
      console.error(
        `[subscribe] Turnstile siteverify HTTP ${response.status}. Rejecting request.`,
        data['error-codes']
      );
      return false;
    }

    if (data.success !== true) {
      console.warn(
        '[subscribe] Turnstile siteverify rejected the token. Rejecting request.',
        data['error-codes']
      );
      return false;
    }

    if (expectedAction && data.action && data.action !== expectedAction) {
      console.warn(
        `[subscribe] Turnstile action mismatch: received "${data.action}", expected "${expectedAction}". Rejecting request.`
      );
      return false;
    }

    return true;
  } catch (error) {
    if (isTimeoutError(error)) {
      console.error(
        `[subscribe] Turnstile siteverify timed out after ${TURNSTILE_TIMEOUT_MS}ms. Rejecting request.`
      );
    } else {
      console.error(
        '[subscribe] Turnstile siteverify network/transport error. Rejecting request.',
        error
      );
    }
    return false;
  }
}

async function sendLeadMagnetEmail(
  env: Env,
  email: string,
  name: string,
  resourceName: string
): Promise<EmailResult> {
  const serviceId =
    env.EMAILJS_SERVICE_ID_LEADMAGNET ||
    env.VITE_EMAILJS_SERVICE_ID_LEADMAGNET ||
    env.EMAILJS_SERVICE_ID ||
    env.VITE_EMAILJS_SERVICE_ID;
  const templateId =
    env.EMAILJS_TEMPLATE_ID_LEADMAGNET ||
    env.VITE_EMAILJS_TEMPLATE_ID_LEADMAGNET ||
    env.EMAILJS_TEMPLATE_ID ||
    env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = env.EMAILJS_PUBLIC_KEY || env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.warn(
      'subscribe function: EmailJS is not fully configured; lead email skipped.'
    );
    return { configured: false, sent: false, clientFallback: true };
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
          user_email: email,
          email,
          name,
          resource_name: resourceName,
          resource_title: resourceName,
          subject: `Your guide is ready: ${resourceName}`,
          downloaded_resources: resourceName,
        },
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      console.error(
        'EmailJS lead-magnet error:',
        response.status,
        (await response.text()).slice(0, 300)
      );
      return { configured: true, sent: false, clientFallback: true };
    }

    return { configured: true, sent: true, clientFallback: false };
  } catch (error) {
    console.error('EmailJS lead-magnet error:', error);
    return { configured: true, sent: false, clientFallback: true };
  }
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  let body: SubscribeRequestBody;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ success: false, message: 'Invalid request body' }, 400);
  }

  // Honeypot first: a filled field is obviously bot traffic. Return a silent
  // 200 and skip Turnstile/Brevo/EmailJS entirely so bots learn nothing and we
  // do not spend a siteverify call on them.
  const honeypot =
    typeof body.company === 'string' ? body.company.trim() : '';

  if (honeypot) {
    // Pretend the subscription succeeded so simple bots do not learn what
    // failed. The response flags suppress the browser's legacy EmailJS
    // fallback, so no Brevo contact or email is created for these requests.
    return jsonResponse({
      success: true,
      message: 'Successfully subscribed!',
      emailed: false,
      emailConfigured: true,
      emailClientFallback: false,
    });
  }

  // Fail closed: after the honeypot, every subscription must pass Turnstile
  // before any other processing. verifyTurnstile rejects a missing/empty
  // secret without making a siteverify request, so a misconfigured deployment
  // cannot write contacts.
  const token =
    typeof body.turnstileToken === 'string' ? body.turnstileToken : '';
  const valid = await verifyTurnstile(
    env.TURNSTILE_SECRET_KEY || '',
    token,
    request.headers.get('CF-Connecting-IP'),
    'lead_magnet'
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

  const { email } = body;
  const source =
    typeof body.source === 'string' && body.source.trim()
      ? body.source.trim().slice(0, 100)
      : 'lead-magnet';
  const firstName =
    typeof body.name === 'string' ? body.name.trim().slice(0, 100) : '';
  const resourceName =
    typeof body.resourceName === 'string' && body.resourceName.trim()
      ? body.resourceName.trim().slice(0, 200)
      : '7-Day Blood Sugar Reset Guide';

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse(
      { success: false, message: 'A valid email is required' },
      400
    );
  }

  const apiKey = env.BREVO_API_KEY;
  const parsedListId = Number(env.BREVO_LIST_ID || 2);
  const listIds =
    Number.isInteger(parsedListId) && parsedListId > 0 ? [parsedListId] : [];

  const baseAttributes: Record<string, string> = firstName
    ? { FIRSTNAME: firstName }
    : {};
  const fullAttributes: Record<string, string> = {
    ...baseAttributes,
    SOURCE: source,
    // Brevo date attributes expect YYYY-MM-DD, not a full ISO timestamp.
    CAPTURED_DATE: new Date().toISOString().slice(0, 10),
  };

  const createContact = (attributes: Record<string, string>, ids: number[]) =>
    fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        email,
        attributes,
        ...(ids.length ? { listIds: ids } : {}),
        updateEnabled: true, // update an existing contact instead of erroring
      }),
      signal: AbortSignal.timeout(10000),
    });

  let brevoSuccess = false;
  let brevoMessage = 'Subscription failed. Please try again.';

  if (!apiKey) {
    console.error('subscribe function: BREVO_API_KEY is not set');
    brevoMessage = 'Subscription service is not configured';
  } else {
    try {
      // First attempt: full attribution + configured list.
      let response = await createContact(fullAttributes, listIds);

      if (!response.ok) {
        const firstError = await response.text();
        console.error(
          'Brevo subscribe error (full payload):',
          response.status,
          firstError
        );

        // Retry without custom attributes. This keeps contacts flowing even if
        // SOURCE/CAPTURED_DATE have not been created in the Brevo account yet.
        response = await createContact(baseAttributes, listIds);
      }

      if (!response.ok) {
        const secondError = await response.text();
        console.error(
          'Brevo subscribe error (base attributes):',
          response.status,
          secondError
        );

        // Last resort: a wrong or deleted list ID should not block the contact
        // from being saved in All Contacts.
        response = await createContact(baseAttributes, []);
      }

      if (response.ok) {
        brevoSuccess = true;
        brevoMessage = 'Successfully subscribed!';
      } else {
        const thirdError = await response.text();
        console.error(
          'Brevo subscribe error (no list):',
          response.status,
          thirdError
        );
      }
    } catch (error) {
      console.error('subscribe function Brevo error:', error);
      brevoMessage = 'Subscription service is temporarily unavailable.';
    }
  }

  // Send the email even if Brevo is down: the visitor still gets the free
  // guide, and the frontend can show a partial-success message.
  const emailResult = await sendLeadMagnetEmail(
    env,
    email,
    firstName,
    resourceName
  );

  if (!brevoSuccess) {
    return jsonResponse(
      {
        success: false,
        message: brevoMessage,
        emailed: emailResult.sent,
        emailConfigured: emailResult.configured,
        emailClientFallback: emailResult.clientFallback,
      },
      502
    );
  }

  return jsonResponse({
    success: true,
    message: brevoMessage,
    emailed: emailResult.sent,
    emailConfigured: emailResult.configured,
    emailClientFallback: emailResult.clientFallback,
  });
};

// Reject non-POST methods explicitly (Pages Functions routes POST requests
// straight to onRequestPost above; this catch-all only ever sees other
// methods, e.g. GET/PUT hitting /subscribe directly from a browser bar).
export const onRequest: PagesFunction<Env> = async () => {
  return jsonResponse({ success: false, message: 'Method not allowed' }, 405);
};
