const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = {
	entry: './app/app.js',
	output:{
		filename: 'app.js',
		path: './public/statics'
	},
	module:{
		loaders:[
			{
				test:  /\.json$/,
				loader: 'json'
			},
			{
				test:  /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /(nodel_modules)/,
				query:{
					presets: ['es2016', 'es2017', 'react'],
					plugins: ['transform-es2015-modules-commonjs'],
				}
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
			}
		]
	},
	target: 'web',
	plugins: [
		new ExtractTextPlugin('../../app/css/app.css'),
	],
};

module.exports = config;
