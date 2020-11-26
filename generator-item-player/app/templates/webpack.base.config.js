/**
 * COMMON WEBPACK CONFIGURATION
 */
const path = require("path");

module.exports = options => ({
  mode: options.mode,
  entry: options.entry,
  plugins: options.plugins,
  devServer: options.devServer,
  output: options.output,
  externals: options.externals,
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      react: path.resolve("./node_modules/react")
    },

    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }
});
