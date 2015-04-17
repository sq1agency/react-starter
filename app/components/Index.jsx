'use strict';

var React = require('react'),
Button = require('./Button');

module.exports = React.createClass({
	displayName: 'Index',

	render: function render() {
		return (
			<div className="container">
				<h1>Hello there!</h1>
				<p>This is an example with React.</p>

				<Button text="Sample Bootstrap Button" />
			</div>
		);
	}
});
