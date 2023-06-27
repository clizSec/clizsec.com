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
    return {
      beforeFiles: [
        {
          source: 'http://cdnjs.cloudflare.com/:path*',
          destination: 'https://cdnjs.cloudflare.com/:path*', // Force HTTPs
          locale: false
        },
        {
          source: '//cdnjs.cloudflare.com/:path*',
          destination: 'https://cdnjs.cloudflare.com/:path*', // Force HTTPs
          locale: false
        },
      ],
      afterFiles: [
        {
          source: 'http://cdnjs.cloudflare.com/:path*',
          destination: 'https://cdnjs.cloudflare.com/:path*', // Force HTTPs
          locale: false
        },
        {
          source: '//cdnjs.cloudflare.com/:path*',
          destination: 'https://cdnjs.cloudflare.com/:path*', // Force HTTPs
          locale: false
        },
      ]
    }
  },
};
