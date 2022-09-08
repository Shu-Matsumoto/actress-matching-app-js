/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  // serverRuntimeConfig: {
  //   // Will only be available on the server side
  //   mySecret: "secret",
  //   secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  // },
  publicRuntimeConfig: {
    // Will be available on both server and client
    NEXT_PUBLIC_SELF_API_URL: process.env.NEXT_PUBLIC_SELF_API_URL,
    NEXT_PUBLIC_DATABASE_URL: process.env.NEXT_PUBLIC_DATABASE_URL,
    NEXT_PUBLIC_SHADOW_DATABASE_URL: process.env.NEXT_PUBLIC_SHADOW_DATABASE_URL,
  },
}
