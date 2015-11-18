var C = require("../../constants"),
	initialState = require("../initialstate");

/*
A reducer is a function that takes the current state and an action, and then returns a
new state. This reducer is responsible for appState.projects data.
*/

module.exports = function(currentstate,action){
	var newstate;
	switch(action.type){
		case C.LOADED_ALL_PROJECTS:
			return action.projects;
		case C.RECEIVED_PROJECT_UPDATE:
			return Object.assign({},currentstate,{[action.projectid]:action.projectdata});
		case C.INSERTED_NEW_PROJECT:
			return Object.assign({},currentstate,{[action.projectid]:action.projectdata});
		case C.DELETED_PROJECT:
			newstate = Object.assign({},currentstate);
			delete newstate[action.projectid];
			return newstate;
		default: return currentstate || initialState.projects;
	}
};