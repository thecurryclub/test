/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "truflavors.org" },
      { protocol: "https", hostname: "www.truflavors.org" },
      { protocol: "https", hostname: "tru-flavors.com" },
      { protocol: "https", hostname: "www.tru-flavors.com" }
    ]
  },
  reactStrictMode: true,
  experimental: { typedRoutes: true }
};
export default nextConfig;
