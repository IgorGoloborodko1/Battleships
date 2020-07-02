const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { postcss } = require('autoprefixer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    welcome: './src/welcomePage/welcome.ts',
    main: './src/mainPage/main.ts',
    goodbye: './src/goodbyePage/goodbye.ts'
  },
  output: {
    filename: './[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript'
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties'
            ],
          },
        },
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
        chunks: ['welcome'],
        template: './src/welcomePage/welcomePage.html',
        filename: 'index.html'
      }),
      new HtmlWebpackPlugin({
        inject: true,
        hash: true,
        chunks: ['main'],
        template: './src/mainPage/mainPage.html',
        filename: 'main.html'
      }),
      new HtmlWebpackPlugin({
        inject: true,
        hash: true,
        chunks: ['goodbye'],
        template: './src/goodbyePage/goodbyePage.html',
        filename: 'goodbye.html'
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