/my-nx-workspace
  /apps
    /my-app
      /src
      /webpack
        webpack.common.js
        webpack.dev.js
        webpack.prod.js
  /libs
  ...

// webpack/webpack.common.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@app': path.resolve(__dirname, 'src/app/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../../dist/my-app'),
    clean: true,
  },
};
