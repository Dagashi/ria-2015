/*
This is the entry point for the app! From here we merely import our routes definitions,
then use React and React-DOM to render it.
*/

var React = require('react'),
	ReactDOM = require('react-dom'),
	Router = require('react-router').Router,
	Provider = require('react-redux').Provider,
	store = require('./store'),
	routes = require('./routes'),
	actions = require('./actions/'),
	History = require('./history');

ReactDOM.render(
	// Wrapping the router in provider so components can `connect` to store using ReactRedux
	<Provider store={store}>
		<Router routes={routes} history={History} />
	</Provider>,
	document.getElementById("root")
);

setTimeout(function(){
	store.dispatch( actions.startListeningToUsers());
	store.dispatch( actions.startListeningToProjects());
	store.dispatch( actions.startListeningToTasks());
});