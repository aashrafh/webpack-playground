const path = require("path");
module.exports = {
  mode: "development",
  devtool: "none",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
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
};
