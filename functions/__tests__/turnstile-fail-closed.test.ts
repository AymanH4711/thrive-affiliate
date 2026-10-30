import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { onRequestPost as contactPost } from '../api/contact';
import { onRequestPost as subscribePost } from '../subscribe';

const CONTACT_ENV = {
  EMAILJS_PUBLIC_KEY: 'public-key',
  EMAILJS_SERVICE_ID_CONTACT: 'contact-service',
  EMAILJS_TEMPLATE_ID_CONTACT: 'contact-template',
};

const SUBSCRIBE_ENV = {
  BREVO_API_KEY: 'brevo-key',
  EMAILJS_PUBLIC_KEY: 'public-key',
  EMAILJS_SERVICE_ID_LEADMAGNET: 'lead-service',
  EMAILJS_TEMPLATE_ID_LEADMAGNET: 'lead-template',
};

const CONTACT_PAYLOAD = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  subject: 'Hello',
  message: 'Test message',
  turnstileToken: 'test-token',
};

const SUBSCRIBE_PAYLOAD = {
  email: 'jane@example.com',
  name: 'Jane Doe',
  resourceName: 'Test Guide',
  turnstileToken: 'test-token',
};

function makeContext(
  path: string,
  payload: Record<string, unknown>,
  env: Record<string, unknown>
) {
  return {
    request: new Request(`https://example.com${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'CF-Connecting-IP': '203.0.113.10',
      },
      body: JSON.stringify(payload),
    }),
    env,
  } as any;
}

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function calledUrls(fetchMock: any): string[] {
  return fetchMock.mock.calls.map(([url]: [unknown]) => String(url));
}

function expectNoEmailOrBrevoCall(fetchMock: any) {
  const urls = calledUrls(fetchMock);
  expect(urls.some((url) => url.includes('emailjs'))).toBe(false);
  expect(urls.some((url) => url.includes('brevo'))).toBe(false);
}

describe('Turnstile fail-closed behavior', () => {
  let fetchMock: any;

  beforeEach(() => {
    fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('rejects contact submissions when TURNSTILE_SECRET_KEY is unset', async () => {
    fetchMock.mockImplementation(() => {
      throw new Error('unexpected outbound call');
    });

    const response = await contactPost(
      makeContext('/api/contact', CONTACT_PAYLOAD, CONTACT_ENV)
    );

    expect(response.status).toBe(403);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('rejects contact submissions when TURNSTILE_SECRET_KEY is empty', async () => {
    fetchMock.mockImplementation(() => {
      throw new Error('unexpected outbound call');
    });

    const response = await contactPost(
      makeContext('/api/contact', CONTACT_PAYLOAD, {
        ...CONTACT_ENV,
        TURNSTILE_SECRET_KEY: '',
      })
    );

    expect(response.status).toBe(403);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('rejects subscribe requests when TURNSTILE_SECRET_KEY is unset', async () => {
    fetchMock.mockImplementation(() => {
      throw new Error('unexpected outbound call');
    });

    const response = await subscribePost(
      makeContext('/subscribe', SUBSCRIBE_PAYLOAD, SUBSCRIBE_ENV)
    );

    expect(response.status).toBe(403);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('rejects subscribe requests when TURNSTILE_SECRET_KEY is empty', async () => {
    fetchMock.mockImplementation(() => {
      throw new Error('unexpected outbound call');
    });

    const response = await subscribePost(
      makeContext('/subscribe', SUBSCRIBE_PAYLOAD, {
        ...SUBSCRIBE_ENV,
        TURNSTILE_SECRET_KEY: '',
      })
    );

    expect(response.status).toBe(403);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('rejects contact submissions when siteverify throws', async () => {
    fetchMock.mockRejectedValue(new Error('network down'));

    const response = await contactPost(
      makeContext('/api/contact', CONTACT_PAYLOAD, {
        ...CONTACT_ENV,
        TURNSTILE_SECRET_KEY: 'test-secret',
      })
    );

    expect(response.status).toBe(403);
    expect(calledUrls(fetchMock)).toHaveLength(1);
    expect(calledUrls(fetchMock)[0]).toContain('siteverify');
    expectNoEmailOrBrevoCall(fetchMock);
  });

  it('rejects subscribe requests when siteverify throws', async () => {
    fetchMock.mockRejectedValue(new Error('network down'));

    const response = await subscribePost(
      makeContext('/subscribe', SUBSCRIBE_PAYLOAD, {
        ...SUBSCRIBE_ENV,
        TURNSTILE_SECRET_KEY: 'test-secret',
      })
    );

    expect(response.status).toBe(403);
    expect(calledUrls(fetchMock)).toHaveLength(1);
    expect(calledUrls(fetchMock)[0]).toContain('siteverify');
    expectNoEmailOrBrevoCall(fetchMock);
  });

  it('rejects contact submissions when siteverify returns malformed JSON', async () => {
    fetchMock.mockResolvedValue(new Response('not json', { status: 200 }));

    const response = await contactPost(
      makeContext('/api/contact', CONTACT_PAYLOAD, {
        ...CONTACT_ENV,
        TURNSTILE_SECRET_KEY: 'test-secret',
      })
    );

    expect(response.status).toBe(403);
    expectNoEmailOrBrevoCall(fetchMock);
  });

  it('rejects subscribe requests when siteverify returns success:false', async () => {
    fetchMock.mockResolvedValue(jsonResponse({ success: false }));

    const response = await subscribePost(
      makeContext('/subscribe', SUBSCRIBE_PAYLOAD, {
        ...SUBSCRIBE_ENV,
        TURNSTILE_SECRET_KEY: 'test-secret',
      })
    );

    expect(response.status).toBe(403);
    expectNoEmailOrBrevoCall(fetchMock);
  });

  it('accepts a contact honeypot submission only after Turnstile succeeds', async () => {
    fetchMock.mockResolvedValue(jsonResponse({ success: true, action: 'contact' }));

    const response = await contactPost(
      makeContext(
        '/api/contact',
        { ...CONTACT_PAYLOAD, company: 'Acme Corp' },
        { ...CONTACT_ENV, TURNSTILE_SECRET_KEY: 'test-secret' }
      )
    );

    expect(response.status).toBe(200);
    expect(calledUrls(fetchMock)).toHaveLength(1);
    expect(calledUrls(fetchMock)[0]).toContain('siteverify');
    expectNoEmailOrBrevoCall(fetchMock);
  });

  it('accepts a subscribe honeypot submission only after Turnstile succeeds', async () => {
    fetchMock.mockResolvedValue(jsonResponse({ success: true, action: 'lead_magnet' }));

    const response = await subscribePost(
      makeContext(
        '/subscribe',
        { ...SUBSCRIBE_PAYLOAD, company: 'Acme Corp' },
        { ...SUBSCRIBE_ENV, TURNSTILE_SECRET_KEY: 'test-secret' }
      )
    );

    expect(response.status).toBe(200);
    expect(calledUrls(fetchMock)).toHaveLength(1);
    expect(calledUrls(fetchMock)[0]).toContain('siteverify');
    expectNoEmailOrBrevoCall(fetchMock);
  });

  it('still processes a verified contact submission', async () => {
    fetchMock.mockImplementation((url: unknown) => {
      if (String(url).includes('siteverify')) {
        return Promise.resolve(jsonResponse({ success: true, action: 'contact' }));
      }
      return Promise.resolve(new Response('ok', { status: 200 }));
    });

    const response = await contactPost(
      makeContext('/api/contact', CONTACT_PAYLOAD, {
        ...CONTACT_ENV,
        TURNSTILE_SECRET_KEY: 'test-secret',
      })
    );

    expect(response.status).toBe(200);
    expect(calledUrls(fetchMock)[0]).toContain('siteverify');
    expect(calledUrls(fetchMock)[1]).toContain('emailjs');
  });

  it('still processes a verified subscribe request', async () => {
    fetchMock.mockImplementation((url: unknown) => {
      if (String(url).includes('siteverify')) {
        return Promise.resolve(jsonResponse({ success: true, action: 'lead_magnet' }));
      }
      return Promise.resolve(new Response('ok', { status: 200 }));
    });

    const response = await subscribePost(
      makeContext('/subscribe', SUBSCRIBE_PAYLOAD, {
        ...SUBSCRIBE_ENV,
        TURNSTILE_SECRET_KEY: 'test-secret',
      })
    );

    expect(response.status).toBe(200);
    expect(calledUrls(fetchMock)[0]).toContain('siteverify');
    expect(calledUrls(fetchMock)[1]).toContain('brevo');
    expect(calledUrls(fetchMock)[2]).toContain('emailjs');
  });
});
