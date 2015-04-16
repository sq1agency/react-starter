var webpack = require('webpack'),
		path = require('path');

module.exports = {
	entry: [
		'./app/app.jsx'
	],

	output: {
		publicPath: '/public',
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},

	plugins: [
		// This cuts down React's lib size on production.
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)
			}
		}),
		new webpack.IgnorePlugin(/vertx/)
	],

	resolveLoader: {
		moduleDirectories: [ 'node_modules' ]
	},

	resolve: {
		extensions: [ '', '.js', '.jsx' ],
		modulesDirectories: [ 'node_modules' ]
	},

	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json-loader'
			},

			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: [ 'jsx-loader' ]
			},

			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				loader: 'url-loader?limit=10000'
			},

			{
				test: /\.(woff|woff2)$/,
				loader: 'url-loader?limit=100000'
			},

			{
				test: /\.(ttf|eot)$/,
				loader: 'file-loader'
			},

			{
				test: /\.html$/,
				loader: 'html-loader'
			},

			{
				test: /\.css$/,
				loader: 'css-loader'
			},

			{
				test: /\.(scss|sass)$/,
				loader: 'css-loader!sass-loader'
			}
		]
	}
};
