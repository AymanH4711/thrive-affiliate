// src/api/subscribe.ts
//
// Calls functions/subscribe.ts (a Cloudflare Pages Function), which holds
// the real Brevo API key server-side only. Do not call Brevo directly from
// this file — any VITE_-prefixed env var ships into the public browser
// bundle, which would expose the key to anyone who opens dev tools.

export async function subscribeToNewsletter(
  email: string,
  source: string = 'lead-magnet'
): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch('/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, source }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return { success: false, message: data.message || 'Subscription failed. Please try again.' };
    }

    return { success: true, message: data.message || 'Successfully subscribed!' };
  } catch (error) {
    console.error('Subscription error:', error);
    return { success: false, message: 'Subscription failed. Please try again.' };
  }
}