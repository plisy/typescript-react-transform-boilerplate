var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js|.jsx|.ts|\.tsx$/,
      loader: 'babel-loader!ts-loader',
      include: path.join(__dirname, 'src')
    }]
  },
  resolve: {
    extensions: ['', '.json', '.js', '.jsx', '.ts', '.tsx']
  }
};
