const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = {
	entry: {
		main: './src/index.js',
	},
	plugins: [
		new RemovePlugin({
			before: {
				include: [
					'./dist'
				]
			}
		}),
		new HtmlWebpackPlugin({
			title: 'Eflamm - blog',
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			},
			{
				test: /\.s[ca]ss$/,
				use: [
					'raw-loader',
					{
						loader: 'sass-loader',
						options: {
							additionalData: `
							@import "./src/styles/_variables.scss";
						  `
						}
					}
				]
			}
		],
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
};