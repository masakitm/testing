var path = require('path');

module.exports = {
  entry: __dirname + "/src/main.js",
  output:{
    path:__dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      //loader
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
};
