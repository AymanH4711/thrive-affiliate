// functions/_middleware.ts
//
// Cloudflare Pages applies the SPA catch-all in public/_redirects to every
// unmatched path, including missing images and hashed JS/CSS. That makes a
// missing asset return 200 text/html, which browsers and social crawlers
// treat as a broken image or script. This middleware lets real assets through
// and turns HTML fallbacks under /images/ and /assets/ into a real 404.
//
// Everything else calls context.next() so the existing _redirects rules and
// Pages Functions keep running.

const ASSET_PREFIXES = ['/images', '/assets'];

function isAssetPath(pathname: string): boolean {
  return ASSET_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);

  if (!isAssetPath(url.pathname)) {
    return context.next();
  }

  const response = await context.next();
  const contentType = response.headers.get('content-type') ?? '';

  // A real image, script, or stylesheet is never text/html. If the SPA
  // fallback answered instead, the requested file does not exist.
  if (contentType.toLowerCase().includes('text/html')) {
    const body = context.request.method === 'HEAD' ? null : 'Not Found';
    return new Response(body, {
      status: 404,
      headers: {
        'content-type': 'text/plain; charset=utf-8',
        'cache-control': 'no-store',
        'x-robots-tag': 'noindex',
      },
    });
  }

  return response;
};
