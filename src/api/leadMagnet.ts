import { subscribeToNewsletter } from '@/api/subscribe';
import { getTurnstileToken } from '@/lib/turnstile';
import analytics from '@/utils/analytics';

interface LeadMagnetInput {
  email: string;
  name: string;
  resourceName: string;
  source: string;
}

/**
 * Legacy client-side email path.
 *
 * New deployments send this email from functions/subscribe.ts after verifying
 * the Turnstile token. This fallback is used only when the server explicitly
 * reports that its EmailJS environment variables are missing, so a deployment
 * that has not finished its security configuration does not lose the email.
 */
async function sendLeadMagnetEmailFallback(
  email: string,
  name: string,
  resourceName: string
): Promise<boolean> {
  const serviceId =
    import.meta.env.VITE_EMAILJS_SERVICE_ID_LEADMAGNET ||
    import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId =
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID_LEADMAGNET ||
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.warn('Lead-magnet email fallback is not configured.');
    return false;
  }

  try {
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(8000),
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
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
    });

    if (!res.ok) {
      console.warn('EmailJS lead-magnet fallback failed:', res.status, await res.text());
    }

    return res.ok;
  } catch (error) {
    console.warn('EmailJS lead-magnet fallback failed:', error);
    return false;
  }
}

export async function submitLeadMagnet({ email, name, resourceName, source }: LeadMagnetInput) {
  let turnstileToken: string | null = null;

  try {
    turnstileToken = await getTurnstileToken('lead_magnet');
  } catch (error) {
    // The download must still work. The server will reject the lead capture if
    // it has Turnstile enforcement enabled, so we surface a warning below.
    console.warn('Turnstile challenge could not be completed:', error);
  }

  const subResult = await subscribeToNewsletter(
    email,
    source,
    name,
    resourceName,
    turnstileToken
  );

  const subscribed = subResult.success;
  let emailed = subResult.emailed;

  if (
    !emailed &&
    (subResult.emailConfigured === false || subResult.emailClientFallback === true)
  ) {
    emailed = await sendLeadMagnetEmailFallback(email, name, resourceName);
  }

  if (!subscribed) {
    console.warn('Lead-magnet subscription failed:', subResult.message);
  }

  if (!emailed) {
    console.warn('Lead-magnet email delivery failed.');
  }

  analytics.trackEvent('generate_lead', {
    source,
    resource_name: resourceName,
    subscribed,
    emailed,
  });

  return { subscribed, emailed };
}

export function triggerDownload(filename: string) {
  // Cloudflare Pages/Linux is case-sensitive, so callers must pass the exact
  // filename that exists under public/downloads/.
  const path = `/downloads/${filename}`;

  analytics.trackEvent('file_download', {
    file_name: filename,
    file_path: path,
    source_page:
      typeof window !== 'undefined' ? window.location.pathname : '',
  });

  const link = document.createElement('a');
  link.href = path;
  link.download = filename;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
