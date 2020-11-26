const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = require("./webpack.base.config")({
  mode: "development",
  entry: {
    index: path.join(__dirname, "test/src/index.tsx")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "test/src/index.html"),
      filename: "./index.html"
    })
  ],

  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    port: 3000
  }
});
