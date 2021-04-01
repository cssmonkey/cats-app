const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = (env = {}) => {
  return merge(common(env), {
    mode: "development",
    output: {
      filename: "[name].[hash].js",
      chunkFilename: "[name].[hash].js",
    },
    devtool: "source-map",
    devServer: {
      contentBase: "./dist",
      historyApiFallback: true,
      compress: true,
      open: true,
      hot: true,
      overlay: true,
      port: 8082,
    },
    optimization: {
      minimize: false,
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          diagnosticOptions: {
            semantic: true,
            syntactic: true,
          },
        },
      }),
    ],
  });
};
