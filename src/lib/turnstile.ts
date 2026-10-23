// Cloudflare Turnstile helper.
//
// The site key is public and is configured with VITE_TURNSTILE_SITE_KEY.
// The matching secret key must be set server-side as TURNSTILE_SECRET_KEY in
// Cloudflare Pages. Do not put the secret in a VITE_-prefixed variable.
//
// The widget is rendered as a managed, execute-on-submit challenge. Most
// visitors will never see it; a challenge appears only when Cloudflare decides
// that interaction is needed.

interface TurnstileRenderOptions {
  sitekey: string;
  action?: string;
  theme?: 'auto' | 'light' | 'dark';
  appearance?: 'always' | 'execute' | 'interaction-only';
  execution?: 'render' | 'execute';
  size?: 'normal' | 'compact' | 'flexible';
  callback?: (token: string) => void;
  'error-callback'?: (errorCode: string) => void;
  'expired-callback'?: () => void;
  'timeout-callback'?: () => void;
  'before-interactive-callback'?: () => void;
  'after-interactive-callback'?: () => void;
}

interface TurnstileApi {
  render: (container: HTMLElement | string, options: TurnstileRenderOptions) => string;
  execute: (widgetId: string) => void;
  remove: (widgetId: string) => void;
  reset: (widgetId?: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const TURNSTILE_SCRIPT_ID = 'thrive-turnstile-script';
const TURNSTILE_SCRIPT_URL =
  'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
const TURNSTILE_LOAD_TIMEOUT_MS = 10000;

let scriptPromise: Promise<TurnstileApi> | null = null;

function loadTurnstile(): Promise<TurnstileApi> {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return Promise.reject(new Error('Turnstile is only available in the browser.'));
  }

  if (window.turnstile) {
    return Promise.resolve(window.turnstile);
  }

  if (scriptPromise) {
    return scriptPromise;
  }

  scriptPromise = new Promise<TurnstileApi>((resolve, reject) => {
    let settled = false;
    let timeoutId = 0;

    const fail = (message: string) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeoutId);
      scriptPromise = null;
      // Drop a script that failed or stalled so a retry can start cleanly.
      document.getElementById(TURNSTILE_SCRIPT_ID)?.remove();
      reject(new Error(message));
    };

    const finish = () => {
      if (settled) return;
      if (window.turnstile) {
        settled = true;
        window.clearTimeout(timeoutId);
        resolve(window.turnstile);
      } else {
        fail('Cloudflare Turnstile did not initialize.');
      }
    };

    timeoutId = window.setTimeout(
      () => fail('Cloudflare Turnstile took too long to load.'),
      TURNSTILE_LOAD_TIMEOUT_MS
    );

    const existing = document.getElementById(TURNSTILE_SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener('load', finish, { once: true });
      existing.addEventListener(
        'error',
        () => fail('Cloudflare Turnstile could not be loaded.'),
        { once: true }
      );
      // It may already have loaded before this helper was called.
      if (window.turnstile) finish();
      return;
    }

    const script = document.createElement('script');
    script.id = TURNSTILE_SCRIPT_ID;
    script.src = TURNSTILE_SCRIPT_URL;
    script.async = true;
    script.defer = true;
    script.addEventListener('load', finish, { once: true });
    script.addEventListener(
      'error',
      () => fail('Cloudflare Turnstile could not be loaded.'),
      { once: true }
    );
    document.head.appendChild(script);
  });

  return scriptPromise;
}

function createChallengeOverlay() {
  const overlay = document.createElement('div');
  overlay.setAttribute('data-thrive-turnstile', 'overlay');
  overlay.style.position = 'fixed';
  overlay.style.inset = '0';
  overlay.style.zIndex = '2147483647';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.padding = '1rem';
  overlay.style.background = 'rgba(15, 23, 42, 0.4)';
  overlay.style.backdropFilter = 'blur(2px)';
  overlay.style.visibility = 'hidden';
  overlay.style.opacity = '0';
  overlay.style.transition = 'opacity 120ms ease';

  const card = document.createElement('div');
  card.style.width = '100%';
  card.style.maxWidth = '360px';
  card.style.borderRadius = '16px';
  card.style.background = '#ffffff';
  card.style.padding = '1.25rem';
  card.style.boxShadow = '0 24px 60px rgba(15, 23, 42, 0.25)';
  card.style.textAlign = 'center';

  const title = document.createElement('p');
  title.textContent = 'Quick security check';
  title.style.margin = '0 0 0.35rem';
  title.style.fontWeight = '700';
  title.style.color = '#0f172a';
  title.style.fontSize = '0.95rem';

  const description = document.createElement('p');
  description.textContent = 'This helps us stop automated spam. It usually takes a few seconds.';
  description.style.margin = '0 0 0.9rem';
  description.style.color = '#64748b';
  description.style.fontSize = '0.75rem';
  description.style.lineHeight = '1.35';

  const widget = document.createElement('div');
  widget.style.display = 'flex';
  widget.style.justifyContent = 'center';
  widget.style.minHeight = '65px';

  card.append(title, description, widget);
  overlay.appendChild(card);

  return { overlay, widget };
}

/**
 * Returns a single-use Turnstile token, or null when Turnstile has not been
 * configured yet. Callers must keep the free download working even if this
 * rejects or returns null.
 */
export async function getTurnstileToken(action: string): Promise<string | null> {
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;

  if (!siteKey) {
    return null;
  }

  const turnstile = await loadTurnstile();

  return new Promise<string>((resolve, reject) => {
    const { overlay, widget } = createChallengeOverlay();
    let widgetId = '';
    let settled = false;
    let timeoutId = 0;

    const cleanup = () => {
      window.clearTimeout(timeoutId);
      if (widgetId) {
        try {
          turnstile.remove(widgetId);
        } catch {
          // The widget may already have removed itself.
        }
      }
      overlay.remove();
    };

    const finish = (error?: Error, token?: string) => {
      if (settled) return;
      settled = true;
      cleanup();
      if (error) {
        reject(error);
      } else if (token) {
        resolve(token);
      } else {
        reject(new Error('Cloudflare Turnstile returned an empty token.'));
      }
    };

    const showOverlay = () => {
      overlay.style.visibility = 'visible';
      overlay.style.opacity = '1';
    };

    const hideOverlay = () => {
      overlay.style.visibility = 'hidden';
      overlay.style.opacity = '0';
    };

    document.body.appendChild(overlay);

    timeoutId = window.setTimeout(() => {
      finish(new Error('The security check timed out. Please try again.'));
    }, 20000);

    try {
      widgetId = turnstile.render(widget, {
        sitekey: siteKey,
        action,
        theme: 'light',
        appearance: 'interaction-only',
        execution: 'execute',
        size: 'flexible',
        'before-interactive-callback': showOverlay,
        'after-interactive-callback': hideOverlay,
        callback: (token) => finish(undefined, token),
        'error-callback': (errorCode) =>
          finish(new Error(`The security check failed (${errorCode}). Please try again.`)),
        'expired-callback': () =>
          finish(new Error('The security check expired. Please try again.')),
        'timeout-callback': () =>
          finish(new Error('The security check timed out. Please try again.')),
      });

      turnstile.execute(widgetId);
    } catch (error) {
      finish(error instanceof Error ? error : new Error('The security check could not start.'));
    }
  });
}
