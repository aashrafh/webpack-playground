const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // Inject styles into DOM
          "css-loader", // Turn css into commonjs
          "sass-loader" // Turn sass into css
        ]
      }
    ]
  }
});
