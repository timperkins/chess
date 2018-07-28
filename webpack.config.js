const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    // Add 'babel-polyfill' so that async/await will work
    bundle: ['babel-polyfill', './src/App.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [{
      test: /.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['env', 'react'],
        plugins: [
          'transform-decorators-legacy',
          'transform-class-properties'
        ]
      }
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader',
    }]
  },
  plugins: [
    new CopyWebpackPlugin([{ from: './src/index.html', to: 'index.html' }]),
    new CopyWebpackPlugin([{ from: './src/img', to: 'img' }]),
  ],
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    port: 8080,
    historyApiFallback: true
  }
};
