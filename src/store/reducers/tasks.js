var C = require("../../constants"),
	initialState = require("../initialstate");

/*
A reducer is a function that takes the current state and an action, and then returns a
new state. This reducer is responsible for appState.tasks data.
*/

module.exports = function(currentstate,action){
	var newstate;
	switch(action.type){
		case C.LOADED_ALL_TASKS:
			return action.tasks;
		case C.RECEIVED_TASK_UPDATE:
			return Object.assign({},currentstate,{[action.taskid]:action.taskdata});
		case C.INSERTED_NEW_TASK:
			return Object.assign({},currentstate,{[action.taskid]:action.taskdata});
		case C.DELETED_TASK:
			newstate = Object.assign({},currentstate);
			delete newstate[action.taskid];
			return newstate;
		default: return currentstate || initialState.tasks;
	}
};