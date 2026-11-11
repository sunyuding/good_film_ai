import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-XSS-Protection", value: "0" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://assets.calendly.com https://api.mapbox.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; media-src 'self' https://pub-f21eb9a068d14465b07fb0f35726ac26.r2.dev; frame-src https://calendly.com https://www.youtube.com; connect-src 'self' https://api.resend.com https://api.mapbox.com https://*.tiles.mapbox.com https://events.mapbox.com; font-src 'self' data:; worker-src blob:;",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source:
          "/:path*.:ext(ico|png|jpg|jpeg|gif|svg|webp|avif|woff|woff2|ttf|otf|eot|js|css)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [{ source: "/home", destination: "/", permanent: true }];
  },
};

export default withNextIntl(nextConfig);
