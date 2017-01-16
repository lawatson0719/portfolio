var React = require('react');

var Link = require('react-router').Link;

var BurgerMenu = require('./BurgerMenu.jsx');

function getActiveClass (path) {
	var current = window.location.hash.slice(1);
	return current === path ? 'active' : '';
}

var App = React.createClass({
	render: function () {
		return (
			<div>
				
					{this.props.children}
				
			</div>
		);
	}
});

module.exports = App;