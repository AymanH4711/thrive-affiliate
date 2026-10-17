import { subscribeToNewsletter } from '@/api/subscribe';

interface LeadMagnetInput {
  email: string;
  name: string;
  resourceName: string;
  source: string;
}

export async function submitLeadMagnet({ email, name, resourceName, source }: LeadMagnetInput) {
  // 1. The lead (Brevo) comes first — this is what matters.
  const sub = await subscribeToNewsletter(email, source, name);

  // 2. The delivery email is best-effort.
  let emailed = false;
  try {
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_LEADMAGNET,
        user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        template_params: { user_email: email, name, downloaded_resources: resourceName },
      }),
    });
    emailed = res.ok;
  } catch {
    // ignore: the download and the Brevo contact still matter more
  }
  return { subscribed: sub.success, emailed };
}

export function triggerDownload(filename: string) {
  const link = document.createElement('a');
  link.href = `/downloads/${filename}`;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}