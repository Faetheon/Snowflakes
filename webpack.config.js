var path = require('path');
var SRC_DIR = path.join(__dirname, '/react/src');
var COMP_DIR = path.join(__dirname, '/react/compiled');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  mode: 'development',
  module: {
    rules: [{
      test: /\.jsx?/,
      include: SRC_DIR,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    }]
  },
  output: {
    filename: 'bundle.js',
    path: COMP_DIR
  },
  watchOptions: {
    poll: true
  }
};