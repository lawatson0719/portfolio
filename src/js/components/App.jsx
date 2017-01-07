var React = require('react');

var Link = require('react-router').Link;

function getActiveClass (path) {
	var current = window.location.hash.slice(1);
	return current === path ? 'active' : '';
}

var App = React.createClass({
	render: function () {
		return (
			<div>
				<main>
					{this.props.children}
				</main>
			</div>
		);
	}
});

module.exports = App;