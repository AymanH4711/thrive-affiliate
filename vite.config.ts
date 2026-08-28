import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import sourceIdentifierPlugin from 'vite-plugin-source-identifier'

const isProd = process.env.BUILD_MODE === 'prod'

export default defineConfig({
  plugins: [
    react(),
    sourceIdentifierPlugin({
      enabled: !isProd,
      attributePrefix: 'data-matrix',
      includeProps: true,
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Don't ship sourcemaps in production — smaller output, no source exposure
    sourcemap: !isProd,

    // Split vendor code (node_modules) from app code so browsers can cache
    // them separately from your frequently-changing article/page code.
    //
    // IMPORTANT: everything from node_modules goes into ONE "vendor" chunk
    // here — do NOT split React into its own chunk apart from libraries
    // like lucide-react that call React.forwardRef at module-load time.
    // An earlier version of this file split "vendor-react" out separately,
    // which caused a real production outage: Rollup doesn't guarantee that
    // chunk finishes executing before other vendor code runs, so
    // lucide-react intermittently ran before React existed yet, throwing
    // "Cannot read properties of undefined (reading 'forwardRef')" and
    // blanking every page. Keep this simple single-vendor-chunk approach
    // unless you have a specific, tested reason to split further.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"
          }
        },
      },
    },

    // Raise the warning threshold slightly — with manualChunks in place,
    // a warning here usually means a genuinely oversized chunk worth
    // investigating rather than noise
    chunkSizeWarningLimit: 700,

    // Inline very small assets (icons, tiny images) as base64 instead of
    // a separate network request; leave larger images (your .webp hero
    // images) as real files
    assetsInlineLimit: 4096,

    // esbuild minification (Vite default) — fast and sufficient; no
    // change needed unless you want terser's slightly smaller output
    // at the cost of build time
    minify: isProd ? "esbuild" : false,
  },

  // Pre-bundle these on dev server start so the first page load in
  // development isn't slow while Vite discovers them on the fly
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
})