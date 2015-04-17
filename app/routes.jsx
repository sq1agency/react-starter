var React = require('react'),
		Route = require('react-router').Route,
		DefaultRoute = require('react-router').DefaultRoute,
		AppWrapper = require('./components/AppWrapper'),
		Index = require('./components/Index');

module.exports = (
	<Route handler={AppWrapper}>
		<DefaultRoute handler={Index} />
	</Route>
);
