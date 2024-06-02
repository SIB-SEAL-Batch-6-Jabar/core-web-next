import { withPayload } from "@payloadcms/next/withPayload";

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

export default withPayload(nextConfig);
