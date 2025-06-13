// next.config.mjs
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  // …your existing Next.js config here…
};

export default createNextIntlPlugin()(nextConfig);
