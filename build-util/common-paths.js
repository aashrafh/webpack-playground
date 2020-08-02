const path = require("path");
const ROOT = path.resolve(__dirname, "../");

module.exports = {
  projectRoot: ROOT,
  outputPath: path.join(ROOT, "dist"),
  appEntry: path.join(ROOT, "src")
};
