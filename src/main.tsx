import React from "react";
import ReactDOM from "react-dom/client";
// import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from './components/ErrorBoundary.tsx';
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* HelmetProvider temporarily disabled due to TypeScript compatibility issues */}
    {/* Will be re-enabled after deployment */}
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);