'use strict';

var React = require('react'),
		Router = require('react-router'),
		routes = require('./routes');

Router.run(
	routes,
	Router.HistoryLocation,
	function routerHandler(Handler, state) {
		React.render(
			<Handler routerState={state} environment="browser" />,
			document.getElementById('content')
		);
	}
);
