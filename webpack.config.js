const path = require("path");

/**
 * @type { import ('webpack').Configuration }
 */
module.exports = {
  mode: 'none',
  entry: './src/index.js',
  // entry: {
  //   app: './src/index.js',
  //   print: './src/print.js'
  // },
  output: {
    filename: 'bundle.js'
    // filename: "[name].bundle.js",
    // path: path.resolve(__dirname, "dist"),
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
