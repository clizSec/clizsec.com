module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  async rewrites() {
    return [
      {
        source: '//cdnjs.cloudflare.com/:path*',
        destination: 'https://cdnjs.cloudflare.com/:path*', // Force HTTPs
      },
    ];
  },
};
