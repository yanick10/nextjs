/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true, swcMinify: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  },
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
  },
}
