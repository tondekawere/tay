module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false }; // Fix for Apollo Client dependency
    return config;
  },
};
