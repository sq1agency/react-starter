var webpack = require('webpack'),
		path = require('path');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8000/public',
		'webpack/hot/only-dev-server',
		'./app/app.jsx'
	],

	output: {
		publicPath: 'http://localhost:8000/public',
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
		new webpack.IgnorePlugin(/vertx/),
		new webpack.NoErrorsPlugin()
	],

	devtool: '#inline-source-map',
	debug: true,

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
				loaders: [ 'jsx-loader', 'react-hot-loader' ]
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
				loader: 'style-loader!css-loader!sass-loader'
			},

			{
				test: /\.(scss|sass)$/,
				loader: 'react-hot-loader'
			}
		]
	}
};
