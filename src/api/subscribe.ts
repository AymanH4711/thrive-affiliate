// src/api/subscribe.ts
//
// Calls functions/subscribe.ts (a Cloudflare Pages Function), which holds the
// real Brevo API key server-side only. The endpoint also verifies the
// Cloudflare Turnstile token and, when configured, sends the lead-magnet email
// through EmailJS from the server. Do not call Brevo or EmailJS with secrets
// from this file — any VITE_-prefixed env var ships into the public bundle.

export interface SubscribeResult {
  success: boolean;
  message: string;
  emailed: boolean;
  /** False means the server's EmailJS configuration is incomplete. */
  emailConfigured?: boolean;
  /** True means the browser should use its legacy EmailJS fallback. */
  emailClientFallback?: boolean;
}

export async function subscribeToNewsletter(
  email: string,
  source: string = 'lead-magnet',
  name?: string,
  resourceName?: string,
  turnstileToken?: string | null
): Promise<SubscribeResult> {
  try {
    const response = await fetch('/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        source,
        name,
        resourceName,
        turnstileToken: turnstileToken || undefined,
      }),
      signal: AbortSignal.timeout(15000),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return {
        success: false,
        message: data.message || 'Subscription failed. Please try again.',
        emailed: data.emailed === true,
        emailConfigured:
          typeof data.emailConfigured === 'boolean' ? data.emailConfigured : undefined,
        emailClientFallback:
          typeof data.emailClientFallback === 'boolean'
            ? data.emailClientFallback
            : undefined,
      };
    }

    return {
      success: data.success !== false,
      message: data.message || 'Successfully subscribed!',
      emailed: data.emailed === true,
      emailConfigured:
        typeof data.emailConfigured === 'boolean' ? data.emailConfigured : undefined,
      emailClientFallback:
        typeof data.emailClientFallback === 'boolean'
          ? data.emailClientFallback
          : undefined,
    };
  } catch (error) {
    console.error('Subscription error:', error);
    return {
      success: false,
      message: 'Subscription failed. Please try again.',
      emailed: false,
    };
  }
}
