/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: "netlify",
  server: "./server.js",
  ignoredRouteFiles: [".*"],
  publicPath: "/build/",
  assetsBuildDirectory: "public/build",
  // appDirectory: "app",
  // serverBuildPath: "netlify/functions/server/index.js",
  // devServerPort: 8002
};
