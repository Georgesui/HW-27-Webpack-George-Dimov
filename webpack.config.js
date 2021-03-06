const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.(js)$/,
			use: 'babel-loader'
		}]
	},
	plugins: [
		new HtmlWebpackPlugin(),
		new CleanWebpackPlugin()
	],
	mode: 'development'
}