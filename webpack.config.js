var webpack = require('webpack');
require("babel-polyfill");
module.exports = {
	entry: ['babel-polyfill', './app.js'],
	output: {filename: 'bundle.js',
			 sourceMapFilename: 'bundle.map'
			},
	devtool:'#source-map',
	module: {
		rules: [
			{
			 test: /\.js$/,
			 loader: 'babel-loader',
			 exclude: /node_modules/,
			 query: {
			 	presets: ['env']
			 }
			}
		]
	},
	target: 'node'
};
