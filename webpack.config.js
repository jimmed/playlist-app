var path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, 'src'),
    filename: path.join(__dirname, 'dist/app.js'),
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel' // 'babel-loader' is also a legal name to reference
      },
    ],
  },
};
