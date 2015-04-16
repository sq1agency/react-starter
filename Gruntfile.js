module.exports = function gruntFile(grunt) {
	var webpack = require('webpack'),
			webpackConfig = require('./webpack.config.js');

	grunt.initConfig({
		webpack: {
			options: webpackConfig,
			build: {
				plugins: webpackConfig.plugins.concat(
					new webpack.DefinePlugin({
						'process.env': {
							// This has effect on the react lib size
							'NODE_ENV': JSON.stringify('production')
						}
					}),
					new webpack.optimize.DedupePlugin(),
					new webpack.optimize.UglifyJsPlugin()
				)
			}
		}
	});
};
