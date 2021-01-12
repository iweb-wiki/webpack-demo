const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const remove = require('./remove-comments-plugin')

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
        test: /\.md$/,
        use: ['html-loader', './markdown-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      title: 'demo',
      meta: {
        viewport: 'width=device-width'
      }
    }),
    new remove()
  ]
};
