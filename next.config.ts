import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  // Security headers. The CSP is now enforced rather than report-only — the
  // policy deliberately keeps the permissive `https:` fallbacks it was audited
  // with, so enforcement changes nothing that was previously passing. Tighten
  // by removing 'unsafe-inline'/'unsafe-eval' and the https: wildcards only
  // after confirming no violations in DevTools. HSTS includes preload; only
  // keep `preload` if the domain is submitted to hstspreload.org.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "connect-src 'self' https:",
              // wa.me checkout opens in a new tab, so no frame-src needed.
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self'",
              "object-src 'none'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Defensive 301: the "iptv-vs-sky-comparison" post was renamed to a
      // generic slug to avoid naming an active broadcaster. Catches any
      // residual indexed URL or backlink.
      {
        source: "/blog/iptv-vs-sky-comparison",
        destination: "/blog/iptv-vs-traditional-tv",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
