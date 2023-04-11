const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "ClientA",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    compress: true,
    port: 9000,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
  optimization: {
    runtimeChunk: "single",
  },
};
