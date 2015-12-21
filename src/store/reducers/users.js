var C = require("../../constants"),
	initialState = require("../initialstate");

/*
A reducer is a function that takes the current state and an action, and then returns a
new state. This reducer is responsible for appState.projects data.
*/

module.exports = function(currentstate,action){
	var newstate;
	switch(action.type){
		case C.LOADED_ALL_USERS:
			return action.users;
		case C.RECEIVED_USER_UPDATE:
			return Object.assign({},currentstate,{[action.uid]:action.userdata});
		case C.INSERTED_NEW_USER:
			return Object.assign({},currentstate,{[action.uid]:action.userdata});
		case C.DELETED_USER:
			newstate = Object.assign({},currentstate);
			delete newstate[action.uid];
			return newstate;
		default: return currentstate || initialState.users;
	}
};