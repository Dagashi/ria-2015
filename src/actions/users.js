/*
This module contains action creators dealing with `appState.users`
They are functions which will return an object describing the actions.
These actions are imported by Redux-aware components who need them
*/

var C = require("../constants"),
	Firebase = require("firebase"),
	usersRef = new Firebase(C.firebaseURL).child("users"),
	_ = require("lodash"),
	History = require('../history');

module.exports = {
	// called when the app starts
	startListeningToUsers: function(){
		return function(dispatch,getState){
			usersRef.on("value",function(snapshot){
				var usersList = _.mapValues(snapshot.val(),function(user,key){
					return Object.assign({".key":key},user);
				});
				dispatch({ type: C.LOADED_ALL_USERS, users:usersList });
			});
		}
	}
};
