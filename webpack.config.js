const path = require('path');
// HTML动态生成
const HtmlWebpackPlugin = require('html-webpack-plugin');

const OUTPUT_DIR = 'dist';

module.exports = {
  entry: {
    main: './src/app/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, OUTPUT_DIR)
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [      
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          },
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Quasar Assessment',
      template: './src/assets/index.html'
    }),
  ],
}