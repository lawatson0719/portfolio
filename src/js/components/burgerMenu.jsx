var React = require('react');
var $ = require('jQuery');

var BurgerMenu = React.createClass ({

	getInitialState: function () {
		return {
			expanded: false
		}
	},

	render: function () {

		var className = !this.state.expanded? '' : 'expanded';

		return (

			<header>
				<div className="page-title-shadow"></div>
				<div className="title-shadow1"></div>
				<div className="page-title-container">
					<h4 className="page-title">Work</h4>
				</div>
				<div className="title-shadow2"></div>
				<nav className="mobile">
					<button className={className} onClick={this.handleClick}></button>
					<div className="pages">
						<a href="/#" className="page-titles">Home</a>
						<a href="#/work" className="page-titles">Work</a>
						<a href="./staticAbout.html" className="page-titles">About</a>
						<a href="./staticResume.html" className="page-titles">Resume</a>
						<a href="./staticContact.html" className="page-titles">Contact</a>
					</div>
				</nav>
			</header>
		);

	},

	handleClick: function () {
		$('button').toggleClass('expanded').siblings('div').slideToggle();
    }



});

module.exports = BurgerMenu;