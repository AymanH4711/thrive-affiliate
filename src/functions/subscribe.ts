// functions/subscribe.ts
//
// Cloudflare Pages Function — automatically routed at POST /subscribe
// because it lives in a top-level `functions/` folder in the repo root.
// Holds the real Brevo API key server-side only. Set BREVO_API_KEY (and
// optionally BREVO_LIST_ID) as environment variables in the Cloudflare
// Pages dashboard — Settings → Environment variables — for the
// Production environment. Do NOT prefix them with VITE_, or they'd ship
// into the public browser bundle instead of staying server-side.

interface Env {
  BREVO_API_KEY: string;
  BREVO_LIST_ID?: string; // optional numeric Brevo list ID to add contacts to
}

interface SubscribeRequestBody {
  email?: string;
  source?: string;
  name?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  let body: SubscribeRequestBody;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ success: false, message: 'Invalid request body.' }, 400);
  }

  const { email, source, name } = body;

  if (!email || !isValidEmail(email)) {
    return jsonResponse({ success: false, message: 'A valid email is required.' }, 400);
  }

  if (!env.BREVO_API_KEY) {
    console.error('BREVO_API_KEY is not set in Cloudflare Pages environment variables.');
    return jsonResponse({ success: false, message: 'Subscription service is not configured.' }, 500);
  }

  const attributes: Record<string, string> = {};
  if (name) attributes.FIRSTNAME = name;
  if (source) attributes.SOURCE = source;

  const brevoPayload: Record<string, unknown> = {
    email,
    attributes,
    updateEnabled: true, // update the contact if it already exists, rather than erroring
  };

  if (env.BREVO_LIST_ID) {
    brevoPayload.listIds = [Number(env.BREVO_LIST_ID)];
  }

  try {
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'api-key': env.BREVO_API_KEY,
      },
      body: JSON.stringify(brevoPayload),
    });

    // Brevo returns 201 for a newly created contact, 204 for an updated
    // existing one (with updateEnabled: true).
    if (brevoResponse.ok || brevoResponse.status === 204) {
      return jsonResponse({ success: true, message: 'Successfully subscribed!' });
    }

    const errorData = await brevoResponse.json().catch(() => ({}));
    console.error('Brevo API error:', brevoResponse.status, errorData);
    return jsonResponse(
      { success: false, message: 'Subscription failed. Please try again.' },
      502
    );
  } catch (error) {
    console.error('Error calling Brevo API:', error);
    return jsonResponse({ success: false, message: 'Subscription failed. Please try again.' }, 502);
  }
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
