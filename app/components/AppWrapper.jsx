'use strict';
var React, RouteHandler, AppWrapper;

React = require('react');
RouteHandler = require('react-router').RouteHandler;

AppWrapper = React.createClass(
	{
		render: function render() {
			return (
				<div>
					<h1>Test.</h1>
					<RouteHandler />
				</div>
			);
		}
	}
);

module.exports = AppWrapper;
