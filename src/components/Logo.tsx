// src/components/Logo.tsx
// Used by Header.tsx (light variant) and Footer.tsx (light variant).
// SVG files live at public/images/brand/logo.svg and logo-dark.svg.
// Vite serves public/ at the root, so the correct href is /images/brand/logo.svg.

interface LogoProps {
  /** Tailwind height class, e.g. "h-10" or "h-12". Width scales automatically. */
  className?: string;
  /** 'light' = logo.svg (default, for white/light backgrounds).
   *  'dark'  = logo-dark.svg (for dark/navy backgrounds). */
  variant?: 'light' | 'dark';
}

export default function Logo({ className = 'h-14', variant = 'light' }: LogoProps) {
  const src =
    variant === 'dark'
      ? '/images/brand/logo-dark.svg'
      : '/images/brand/logo.svg';

  return (
    <img
      src={src}
      alt="ThriveHealth360 — Evidence-Based Prediabetes Guidance"
      // w-auto keeps the aspect ratio when only height is constrained
      className={`${className} w-auto object-contain`}
      // Inline fallback: show text brand if SVG fails to load
      onError={(e) => {
        const img = e.currentTarget;
        img.style.display = 'none';
        const span = document.createElement('span');
        span.className = 'text-xl font-bold text-emerald-800 font-serif';
        span.textContent = 'ThriveHealth360';
        img.parentElement?.appendChild(span);
      }}
    />
  );
}