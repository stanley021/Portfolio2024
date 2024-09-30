

// next.config.js

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'assets.aceternity.com',
          pathname: '**',
        }
      ],
    },
  };
  