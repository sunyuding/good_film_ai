import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Cloudflare Pages. No adapter and no Next upgrade needed:
  // the site has no server-side data fetching, no cookies()/headers(), and no
  // revalidation — the only server pieces were next-intl middleware and the
  // contact route, both handled below.
  output: "export",
  images: { unoptimized: true },
};

export default withNextIntl(nextConfig);
