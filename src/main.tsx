import React from "react";
import ReactDOM from "react-dom/client";
// import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from './components/ErrorBoundary.tsx';
import App from "./App.tsx";
import "./index.css";

// Auto-recover from stale lazy-chunk loads. Every deploy renames JS chunk
// files (content hashing). If someone has the site open in a background tab
// during a deploy, then navigates to a lazy-loaded route, their browser
// tries to fetch a chunk filename that no longer exists on the server —
// throwing "Failed to fetch dynamically imported module" and landing on a
// broken error screen instead of the page they wanted.
//
// Vite fires a `vite:preloadError` event on window for exactly this case.
// One silent reload almost always fixes it, since the reload pulls a fresh
// index.html pointing at the current chunk filenames. The sessionStorage
// guard prevents a reload loop if the failure is a genuine, persistent
// problem rather than a stale-cache blip.
window.addEventListener('vite:preloadError', () => {
  const key = 'chunk-reload-attempted';
  if (!sessionStorage.getItem(key)) {
    sessionStorage.setItem(key, '1');
    window.location.reload();
  }
  // If it fires again after a reload, don't loop forever — let the
  // ErrorBoundary catch it and show the real error screen instead.
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* HelmetProvider temporarily disabled due to TypeScript compatibility issues */}
    {/* Will be re-enabled after deployment */}
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// Successful render — clear the guard so a LATER, unrelated chunk failure
// (e.g. after the next deploy) still gets its own single reload attempt
// instead of being silently blocked by a flag left over from earlier.
sessionStorage.removeItem('chunk-reload-attempted');