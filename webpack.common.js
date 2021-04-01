/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const buildPath = path.join(__dirname, "./dist");
const sourcePath = path.join(__dirname, "./src");
const publicPath = path.join(__dirname, "./public");

module.exports = () => ({
  entry: {
    app: "./src/index.tsx",
  },
  output: {
    path: buildPath,
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "resolve-url-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
        exclude: /node_modules\/(?!(react-toastify))/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: path.resolve(sourcePath, "assets/images"),
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/images/",
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ["vendor", "app"],
      filename: "index.html",
      template: path.join(publicPath, "/index.html"),
    }),
  ],
});
