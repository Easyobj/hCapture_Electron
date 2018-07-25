const path = require("path");

module.exports = {
  target: "electron-main",
  mode: "development",
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader?modules"]
      }
    ]
  },
  entry: {
    "main/index": "./src/main/index.js",
    "renderer/app": "./src/renderer/app.jsx",
    "renderer/captureWindow": "./src/renderer/captureWindow.js",
    "renderer/pincodeWindow": "./src/renderer/pincodeWindow.jsx",
    "renderer/previewWindow": "./src/renderer/previewWindow.jsx"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  devtool: "source-map"
};
