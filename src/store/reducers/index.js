var Redux = require("redux"),
	projectReducer = require("./projects");

/*
In the future you might be adding more reducers here, but for now there is only 1 - the projects reducer.
*/
var rootReducer = Redux.combineReducers({
	projects: projectReducer // this means projectReducer will operate on appState.projects
});

module.exports = rootReducer;