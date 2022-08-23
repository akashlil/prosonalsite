/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL: "https://",
    DB_USER: "dbAkash",
    DB_PASS: "hfOBXXm9Qvc4TGUw",
  },
};

module.exports = nextConfig;
