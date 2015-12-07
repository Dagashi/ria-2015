var Redux = require("redux");
var projectReducer = require("./projects");
var taskReducer = require("./tasks");
var authReducer = require("./auth");

/*
In the future you might be adding more reducers here, but for now there is only 1 - the projects reducer.
*/
var rootReducer = Redux.combineReducers({
	projects: projectReducer, // this means projectReducer will operate on appState.projects
	tasks: taskReducer, // this means taskReducer will operate on appState.tasks
  auth: authReducer
});

module.exports = rootReducer;
