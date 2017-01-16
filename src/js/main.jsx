var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var App = require('./components/App.jsx');
var HomePage = require('./components/HomePage.jsx');
var Work = require('./components/Work.jsx');




var jsx = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={HomePage} />
			<Route path="/work" component={Work} />
		</Route>
	</Router>
);

ReactDOM.render(jsx, document.querySelector('#app'));