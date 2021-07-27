'use strict';
// для разработки: npx webpack serve
// сбилдить development mode: npx webpack
// сбилдить production mode: поменять mode: 'production', npx webpack

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production', // или production

  entry: './src/js/main.js',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
	
  watch: true,

  devtool: "source-map",

	devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html' // подкючает bundle.js в index.html автоматически
		})
	],
};
