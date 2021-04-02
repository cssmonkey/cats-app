const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const common = require("./webpack.common.js");

module.exports = (env = {}) => {
  return merge(common(env), {
    mode: process.env.NODE_ENV,
    devtool: "source-map",
    output: {
      filename: "[name].[chunkhash].js",
      chunkFilename: "[name].[chunkhash].js",
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
      new BundleAnalyzerPlugin({
        defaultSizes: "gzip",
        analyzerMode: "static",
        openAnalyzer: true,
      }),
    ],
    module: {
      rules: [
        {
          test: /app\.(sa|sc|c)ss$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
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
        },
      ],
    },
  });
};
