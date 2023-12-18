// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     forceSwcTransforms: true,
//   },
// }

// module.exports = nextConfig
const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = withNextIntl({
  ...nextConfig,
  // Other Next.js configuration ...
});
