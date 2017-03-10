var path = require('path');
var webpack = require('webpack');

var config = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    'webpack/hot/only-dev-server',
    './client.js'
  ],
  output: {
    path: path.join(__dirname, './'),
    filename: 'public/scripts/[name].js'
  },
  devtool: 'sheap-source-map',
  resolve: {
    extensions: [".js", ".vue"],
  },
  module: {
    rules: [{
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        use: ['file-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  cache: true,
};

module.exports = config
