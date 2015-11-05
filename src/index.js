/*
This is the entry point for the app! From here we merely import our routes definitions,
then use React and React-DOM to render it.
*/

var React = require('react'),
	ReactDOM = require('react-dom'),
	Router = require('react-router').Router,
	Provider = require('react-redux').Provider,
	routes = require('./routes');

ReactDOM.render(
	<Router routes={routes}/>,
	document.getElementById("root")
);