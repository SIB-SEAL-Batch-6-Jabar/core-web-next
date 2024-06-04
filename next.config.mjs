import { withPayload } from "@payloadcms/next/withPayload";
import createNextIntlPlugin from "next-intl/plugin";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  aggressiveFrontEndNavCaching: true,
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
});
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "simanis.s3.ap-southeast-1.amazonaws.com",
        port: "",
        pathname: "/**/*",
      },
    ],
  },
};

export default withPayload(withPWA(withNextIntl(nextConfig)));
