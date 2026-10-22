import { subscribeToNewsletter } from '@/api/subscribe';
import analytics from '@/utils/analytics';

interface LeadMagnetInput {
  email: string;
  name: string;
  resourceName: string;
  source: string;
}

async function sendLeadMagnetEmail(
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
    console.warn('Lead-magnet email is not configured (service, template, or public key missing).');
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
          // Prefer {{downloaded_resources}} in the EmailJS template heading:
          // older deployed bundles already send that variable. resource_name
          // and resource_title are also supplied for newer templates.
          resource_name: resourceName,
          resource_title: resourceName,
          subject: `Your guide is ready: ${resourceName}`,
          downloaded_resources: resourceName,
        },
      }),
    });

    if (!res.ok) {
      console.warn('EmailJS lead-magnet send failed:', res.status, await res.text());
    }

    return res.ok;
  } catch (error) {
    console.warn('EmailJS lead-magnet send failed:', error);
    return false;
  }
}

export async function submitLeadMagnet({ email, name, resourceName, source }: LeadMagnetInput) {
  // Run both channels in parallel. Either one succeeding is useful, and a
  // failure in one must never block the free download.
  const [subResult, emailResult] = await Promise.allSettled([
    subscribeToNewsletter(email, source, name),
    sendLeadMagnetEmail(email, name, resourceName),
  ]);

  const subscribed =
    subResult.status === 'fulfilled' && subResult.value.success;
  const emailed = emailResult.status === 'fulfilled' && emailResult.value;

  if (!subscribed) {
    const message =
      subResult.status === 'fulfilled'
        ? subResult.value.message
        : 'Brevo request failed';
    console.warn('Lead-magnet subscription failed:', message);
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
