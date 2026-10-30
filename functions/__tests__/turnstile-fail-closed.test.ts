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

function logCalls(spy: any): string[] {
  return spy.mock.calls.map((args: unknown[]) =>
    args
      .map((arg) => (typeof arg === 'string' ? arg : String(arg)))
      .join(' ')
  );
}

function rejectionLogs(): string[] {
  return [...logCalls(errorSpy), ...logCalls(warnSpy)].filter((line) =>
    line.includes('bot_rejection')
  );
}

function expectSingleRejectionLog(
  endpoint: 'contact' | 'subscribe',
  reason: string,
  details: Record<string, string | number> = {}
): string {
  const lines = rejectionLogs();
  expect(lines).toHaveLength(1);

  const line = lines[0];
  expect(line).toMatch(
    new RegExp(`^\\[${endpoint}\\] bot_rejection reason=${reason}(?: |$)`)
  );
  for (const [key, value] of Object.entries(details)) {
    expect(line).toContain(`${key}=${value}`);
  }
  return line;
}

function makeTimeoutError() {
  const error = new Error('The operation was aborted due to timeout');
  error.name = 'TimeoutError';
  return error;
}

let fetchMock: any;
let errorSpy: any;
let warnSpy: any;

beforeEach(() => {
  fetchMock = vi.fn();
  vi.stubGlobal('fetch', fetchMock);
  errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('honeypot-first behavior', () => {
  it('silently accepts a contact honeypot hit without a token and makes no outbound calls', async () => {
    fetchMock.mockImplementation(() => {
      throw new Error('unexpected outbound call');
    });

    const response = await contactPost(
      makeContext(
        '/api/contact',
        { ...CONTACT_PAYLOAD, turnstileToken: undefined, company: 'Acme Corp' },
        { ...CONTACT_ENV, TURNSTILE_SECRET_KEY: 'test-secret' }
      )
    );

    expect(response.status).toBe(200);
    expect((await response.json()).success).toBe(true);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('silently accepts a contact honeypot hit even with a valid token and makes no outbound calls', async () => {
    fetchMock.mockImplementation(() => {
      throw new Error('unexpected outbound call');
    });

    const response = await contactPost(
      makeContext(
        '/api/contact',
        { ...CONTACT_PAYLOAD, company: 'Acme Corp' },
        { ...CONTACT_ENV, TURNSTILE_SECRET_KEY: 'test-secret' }
      )
    );

    expect(response.status).toBe(200);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('silently accepts a subscribe honeypot hit without a token and makes no outbound calls', async () => {
    fetchMock.mockImplementation(() => {
      throw new Error('unexpected outbound call');
    });

    const response = await subscribePost(
      makeContext(
        '/subscribe',
        { ...SUBSCRIBE_PAYLOAD, turnstileToken: undefined, company: 'Acme Corp' },
        { ...SUBSCRIBE_ENV, TURNSTILE_SECRET_KEY: 'test-secret' }
      )
    );

    expect(response.status).toBe(200);
    expect((await response.json()).success).toBe(true);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('silently accepts a subscribe honeypot hit even with a valid token and makes no outbound calls', async () => {
    fetchMock.mockImplementation(() => {
      throw new Error('unexpected outbound call');
    });

    const response = await subscribePost(
      makeContext(
        '/subscribe',
        { ...SUBSCRIBE_PAYLOAD, company: 'Acme Corp' },
        { ...SUBSCRIBE_ENV, TURNSTILE_SECRET_KEY: 'test-secret' }
      )
    );

    expect(response.status).toBe(200);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('silently accepts a contact honeypot hit even when TURNSTILE_SECRET_KEY is unset', async () => {
    fetchMock.mockImplementation(() => {
      throw new Error('unexpected outbound call');
    });

    const response = await contactPost(
      makeContext('/api/contact', { ...CONTACT_PAYLOAD, company: 'Acme Corp' }, CONTACT_ENV)
    );

    expect(response.status).toBe(200);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('silently accepts a subscribe honeypot hit even when TURNSTILE_SECRET_KEY is unset', async () => {
    fetchMock.mockImplementation(() => {
      throw new Error('unexpected outbound call');
    });

    const response = await subscribePost(
      makeContext('/subscribe', { ...SUBSCRIBE_PAYLOAD, company: 'Acme Corp' }, SUBSCRIBE_ENV)
    );

    expect(response.status).toBe(200);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('rejects a contact submission with an empty honeypot and no token', async () => {
    fetchMock.mockImplementation(() => {
      throw new Error('unexpected outbound call');
    });

    const response = await contactPost(
      makeContext(
        '/api/contact',
        { ...CONTACT_PAYLOAD, turnstileToken: undefined },
        { ...CONTACT_ENV, TURNSTILE_SECRET_KEY: 'test-secret' }
      )
    );

    expect(response.status).toBe(403);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('rejects a subscribe request with an empty honeypot and no token', async () => {
    fetchMock.mockImplementation(() => {
      throw new Error('unexpected outbound call');
    });

    const response = await subscribePost(
      makeContext(
        '/subscribe',
        { ...SUBSCRIBE_PAYLOAD, turnstileToken: undefined },
        { ...SUBSCRIBE_ENV, TURNSTILE_SECRET_KEY: 'test-secret' }
      )
    );

    expect(response.status).toBe(403);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('rejects a contact submission with an empty honeypot and an invalid token', async () => {
    fetchMock.mockResolvedValue(
      jsonResponse({ success: false, 'error-codes': ['invalid-input-response'] })
    );

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

  it('rejects a subscribe request with an empty honeypot and an invalid token', async () => {
    fetchMock.mockResolvedValue(jsonResponse({ success: false }));

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

  it('still processes a verified contact submission with an empty honeypot', async () => {
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

  it('still processes a verified subscribe request with an empty honeypot', async () => {
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

describe('fail-closed Turnstile behavior', () => {
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

  it('rejects contact submissions when siteverify times out', async () => {
    fetchMock.mockRejectedValue(makeTimeoutError());

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

  it('rejects contact submissions when siteverify returns malformed JSON', async () => {
    fetchMock.mockResolvedValue(new Response('not json', { status: 200 }));

    const response = await contactPost(
      makeContext('/api/contact', CONTACT_PAYLOAD, {
        ...CONTACT_ENV,
        TURNSTILE_SECRET_KEY: 'test-secret',
      })
    );

    expect(response.status).toBe(403);
    expect(calledUrls(fetchMock)).toHaveLength(1);
    expectNoEmailOrBrevoCall(fetchMock);
  });

  it('rejects subscribe requests when siteverify returns malformed JSON', async () => {
    fetchMock.mockResolvedValue(new Response('not json', { status: 200 }));

    const response = await subscribePost(
      makeContext('/subscribe', SUBSCRIBE_PAYLOAD, {
        ...SUBSCRIBE_ENV,
        TURNSTILE_SECRET_KEY: 'test-secret',
      })
    );

    expect(response.status).toBe(403);
    expect(calledUrls(fetchMock)).toHaveLength(1);
    expectNoEmailOrBrevoCall(fetchMock);
  });

  it('rejects contact submissions when siteverify returns HTTP 503', async () => {
    fetchMock.mockResolvedValue(jsonResponse({}, 503));

    const response = await contactPost(
      makeContext('/api/contact', CONTACT_PAYLOAD, {
        ...CONTACT_ENV,
        TURNSTILE_SECRET_KEY: 'test-secret',
      })
    );

    expect(response.status).toBe(403);
    expect(calledUrls(fetchMock)).toHaveLength(1);
    expectNoEmailOrBrevoCall(fetchMock);
  });
});

describe('structured bot-rejection logging', () => {
  it('logs exactly one honeypot_hit for a contact honeypot hit', async () => {
    fetchMock.mockImplementation(() => {
      throw new Error('unexpected outbound call');
    });

    const response = await contactPost(
      makeContext(
        '/api/contact',
        { ...CONTACT_PAYLOAD, company: 'Acme Corp' },
        { ...CONTACT_ENV, TURNSTILE_SECRET_KEY: 'test-secret' }
      )
    );

    expect(response.status).toBe(200);
    expectSingleRejectionLog('contact', 'honeypot_hit');
  });

  it('logs exactly one honeypot_hit for a subscribe honeypot hit', async () => {
    fetchMock.mockImplementation(() => {
      throw new Error('unexpected outbound call');
    });

    const response = await subscribePost(
      makeContext(
        '/subscribe',
        { ...SUBSCRIBE_PAYLOAD, company: 'Acme Corp' },
        { ...SUBSCRIBE_ENV, TURNSTILE_SECRET_KEY: 'test-secret' }
      )
    );

    expect(response.status).toBe(200);
    expectSingleRejectionLog('subscribe', 'honeypot_hit');
  });

  it('logs turnstile_secret_missing for an unset contact secret', async () => {
    fetchMock.mockImplementation(() => {
      throw new Error('unexpected outbound call');
    });

    const response = await contactPost(
      makeContext('/api/contact', CONTACT_PAYLOAD, CONTACT_ENV)
    );

    expect(response.status).toBe(403);
    expectSingleRejectionLog('contact', 'turnstile_secret_missing');
  });

  it('logs turnstile_secret_missing for an empty subscribe secret', async () => {
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
    expectSingleRejectionLog('subscribe', 'turnstile_secret_missing');
  });

  it('logs turnstile_token_invalid for a missing contact token', async () => {
    fetchMock.mockImplementation(() => {
      throw new Error('unexpected outbound call');
    });

    const response = await contactPost(
      makeContext(
        '/api/contact',
        { ...CONTACT_PAYLOAD, turnstileToken: undefined },
        { ...CONTACT_ENV, TURNSTILE_SECRET_KEY: 'test-secret' }
      )
    );

    expect(response.status).toBe(403);
    expectSingleRejectionLog('contact', 'turnstile_token_invalid', {
      detail: 'missing',
    });
  });

  it('logs turnstile_token_invalid for a missing subscribe token', async () => {
    fetchMock.mockImplementation(() => {
      throw new Error('unexpected outbound call');
    });

    const response = await subscribePost(
      makeContext(
        '/subscribe',
        { ...SUBSCRIBE_PAYLOAD, turnstileToken: undefined },
        { ...SUBSCRIBE_ENV, TURNSTILE_SECRET_KEY: 'test-secret' }
      )
    );

    expect(response.status).toBe(403);
    expectSingleRejectionLog('subscribe', 'turnstile_token_invalid', {
      detail: 'missing',
    });
  });

  it('logs turnstile_siteverify_error detail=network when siteverify throws', async () => {
    fetchMock.mockRejectedValue(new Error('network down'));

    const response = await contactPost(
      makeContext('/api/contact', CONTACT_PAYLOAD, {
        ...CONTACT_ENV,
        TURNSTILE_SECRET_KEY: 'test-secret',
      })
    );

    expect(response.status).toBe(403);
    expectSingleRejectionLog('contact', 'turnstile_siteverify_error', {
      detail: 'network',
      error_name: 'Error',
    });
  });

  it('logs turnstile_siteverify_error detail=timeout when siteverify times out', async () => {
    fetchMock.mockRejectedValue(makeTimeoutError());

    const response = await contactPost(
      makeContext('/api/contact', CONTACT_PAYLOAD, {
        ...CONTACT_ENV,
        TURNSTILE_SECRET_KEY: 'test-secret',
      })
    );

    expect(response.status).toBe(403);
    expectSingleRejectionLog('contact', 'turnstile_siteverify_error', {
      detail: 'timeout',
      timeout_ms: 8000,
    });
  });

  it('logs turnstile_siteverify_error detail=malformed_json for malformed JSON', async () => {
    fetchMock.mockResolvedValue(new Response('not json', { status: 200 }));

    const response = await contactPost(
      makeContext('/api/contact', CONTACT_PAYLOAD, {
        ...CONTACT_ENV,
        TURNSTILE_SECRET_KEY: 'test-secret',
      })
    );

    expect(response.status).toBe(403);
    expectSingleRejectionLog('contact', 'turnstile_siteverify_error', {
      detail: 'malformed_json',
      status: 200,
    });
  });

  it('logs turnstile_siteverify_error detail=http_error for HTTP 503', async () => {
    fetchMock.mockResolvedValue(jsonResponse({}, 503));

    const response = await contactPost(
      makeContext('/api/contact', CONTACT_PAYLOAD, {
        ...CONTACT_ENV,
        TURNSTILE_SECRET_KEY: 'test-secret',
      })
    );

    expect(response.status).toBe(403);
    expectSingleRejectionLog('contact', 'turnstile_siteverify_error', {
      detail: 'http_error',
      status: 503,
    });
  });

  it('logs turnstile_rejected with error codes when siteverify returns success: false', async () => {
    fetchMock.mockResolvedValue(
      jsonResponse({ success: false, 'error-codes': ['invalid-input-response'] })
    );

    const response = await contactPost(
      makeContext('/api/contact', CONTACT_PAYLOAD, {
        ...CONTACT_ENV,
        TURNSTILE_SECRET_KEY: 'test-secret',
      })
    );

    expect(response.status).toBe(403);
    expectSingleRejectionLog('contact', 'turnstile_rejected', {
      error_codes: 'invalid-input-response',
    });
  });

  it('logs turnstile_rejected for a subscribe token rejection', async () => {
    fetchMock.mockResolvedValue(
      jsonResponse({ success: false, 'error-codes': ['timeout-or-duplicate'] })
    );

    const response = await subscribePost(
      makeContext('/subscribe', SUBSCRIBE_PAYLOAD, {
        ...SUBSCRIBE_ENV,
        TURNSTILE_SECRET_KEY: 'test-secret',
      })
    );

    expect(response.status).toBe(403);
    expectSingleRejectionLog('subscribe', 'turnstile_rejected', {
      error_codes: 'timeout-or-duplicate',
    });
  });

  it('logs turnstile_action_mismatch when the action does not match', async () => {
    fetchMock.mockResolvedValue(
      jsonResponse({ success: true, action: 'wrong_action' })
    );

    const response = await contactPost(
      makeContext('/api/contact', CONTACT_PAYLOAD, {
        ...CONTACT_ENV,
        TURNSTILE_SECRET_KEY: 'test-secret',
      })
    );

    expect(response.status).toBe(403);
    expectSingleRejectionLog('contact', 'turnstile_action_mismatch', {
      expected: 'contact',
      actual: 'wrong_action',
    });
  });

  it('does not log secrets, tokens, or submitted form values', async () => {
    fetchMock.mockResolvedValue(
      jsonResponse({ success: false, 'error-codes': ['invalid-input-response'] })
    );

    await contactPost(
      makeContext('/api/contact', CONTACT_PAYLOAD, {
        ...CONTACT_ENV,
        TURNSTILE_SECRET_KEY: 'test-secret',
      })
    );
    await subscribePost(
      makeContext('/subscribe', SUBSCRIBE_PAYLOAD, {
        ...SUBSCRIBE_ENV,
        TURNSTILE_SECRET_KEY: 'test-secret',
      })
    );
    await contactPost(
      makeContext(
        '/api/contact',
        { ...CONTACT_PAYLOAD, company: 'Acme Corp' },
        { ...CONTACT_ENV, TURNSTILE_SECRET_KEY: 'test-secret' }
      )
    );

    const logs = rejectionLogs().join('\n');
    expect(logs).toContain('bot_rejection');

    for (const sensitive of [
      'test-secret',
      'test-token',
      'brevo-key',
      'jane@example.com',
      'Jane Doe',
      'Test message',
      'Test Guide',
      'Acme Corp',
    ]) {
      expect(logs).not.toContain(sensitive);
    }
  });
});
