import withPWA from "@ducanh2912/next-pwa";

const nextConfig = withPWA({
  dest: "public",
})({
  reactStrictMode: true,
});

export default nextConfig;