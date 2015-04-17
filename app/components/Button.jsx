'use strict';

var React = require('react');

module.exports = React.createClass({
	displayName: 'Button',

	render: function render() {
		return (
			<button className="btn btn-primary">{this.props.text}</button>
		);
	}
});
