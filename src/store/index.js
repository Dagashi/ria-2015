/*
This file defines the main Redux Store. It will be required by all "smart" components in the app
*/

var Redux = require("redux"),
	rootReducer = require("./reducers"),
	initialState = require("./initialstate"),
	thunk = require('redux-thunk'); // allows us to use asynchronous actions


// a simple logging middleware that will show all actions and resulting state in the console
var logger = store => next => action => {
	console.log('dispatching', action.type,action)
	var result = next(action)
	console.log('next state', store.getState())
	return result
}


module.exports = Redux.applyMiddleware(thunk,logger)(Redux.createStore)(rootReducer,initialState);

