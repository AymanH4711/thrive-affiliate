// functions/subscribe.ts
//
// Cloudflare Pages Function — replaces netlify/functions/subscribe.ts.
// File-based routing: this file living at functions/subscribe.ts makes it
// respond to requests at /subscribe automatically, no extra config needed.
//
// Keeps the Brevo API key server-side only, same reasoning as the Netlify
// version: any VITE_-prefixed env var ships into the public browser bundle,
// so Brevo must never be called with that key from client code.
//
// Set in the Cloudflare dashboard (Workers & Pages → your project →
// Settings → Environment variables), NOT in a VITE_-prefixed var and not
// committed to the repo:
//   BREVO_API_KEY   — your Brevo API key
//   BREVO_LIST_ID    — numeric list ID contacts should be added to (optional, defaults to 2 below)

interface Env {
  BREVO_API_KEY: string;
  BREVO_LIST_ID?: string;
}

interface SubscribeRequestBody {
  email?: string;
  source?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  let body: SubscribeRequestBody;
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ success: false, message: 'Invalid request body' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const { email, source = 'lead-magnet' } = body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(
      JSON.stringify({ success: false, message: 'A valid email is required' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const apiKey = env.BREVO_API_KEY;
  const listId = Number(env.BREVO_LIST_ID || 2);

  if (!apiKey) {
    console.error('subscribe function: BREVO_API_KEY is not set');
    return new Response(
      JSON.stringify({ success: false, message: 'Subscription service is not configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        email,
        attributes: {
          SOURCE: source,
          CAPTURED_DATE: new Date().toISOString(),
        },
        listIds: [listId],
        updateEnabled: true, // don't error if the contact already exists — just update it
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Brevo subscribe error:', response.status, errText);
      return new Response(
        JSON.stringify({ success: false, message: 'Subscription failed. Please try again.' }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Successfully subscribed!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('subscribe function error:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Subscription failed. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// Reject non-POST methods explicitly (Pages Functions routes POST requests
// straight to onRequestPost above; this catch-all only ever sees other
// methods, e.g. GET/PUT hitting /subscribe directly from a browser bar).
export const onRequest: PagesFunction<Env> = async () => {
  return new Response(
    JSON.stringify({ success: false, message: 'Method not allowed' }),
    { status: 405, headers: { 'Content-Type': 'application/json' } }
  );
};