const nextBuildId = require("next-build-id");

module.exports = {
  distDir: "_next",
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  reactStrictMode: true,
  trailingSlash: true,
};
