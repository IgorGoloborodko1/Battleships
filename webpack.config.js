const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { postcss } = require('autoprefixer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: ['./src/index.ts'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader ,'css-loader', 'postcss-loader' , 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        inject: true,
        hash: true,
        template: './public/index.html',
        filename: 'index.html'
      }),
    new MiniCssExtractPlugin({
        filename: 'styles.css',
    }),
  ],
  devServer: {
      historyApiFallback: true,
      noInfo: false,
      quiet: false,
      stats: 'errors-only',
      clientLogLevel: 'warning',
      compress: true,
      port: 9000,
  },
};