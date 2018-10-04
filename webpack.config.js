const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  entry: "./src/js/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "js/app.js"
  },
  plugins: [new HtmlWebpackPlugin({
    hash: true,
    title: 'Weather App',
    template: './src/index.html',
    filename: './index.html'
  })],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        resolve: {
          extensions: [".js", ".jsx"]
        },
        use: {
          loader: "babel-loader",
          options: {
            presets: ["react", "babel-preset-env"]
          }
        }
      },
      {
        test:/\.scss$/,resolve: {
          extensions: [".scss"]
        },
        use:['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: './dist'
  },
  devtool: 'source-map'
};
