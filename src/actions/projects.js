/*
This module contains action creators dealing with `appState.projects`
They are functions which will return an object describing the actions.
These actions are imported by Redux-aware components who need them
*/

var C = require("../constants"),
	Firebase = require("firebase"),
	projectsRef = new Firebase(C.firebaseURL).child("projects"),
	_ = require("lodash");

module.exports = {
	// called when the app starts
	startListeningToProjects: function(){
		return function(dispatch,getState){
			projectsRef.on("value",function(snapshot){
				var projects = _.mapValues(snapshot.val(),function(proj,key){
					return Object.assign({".key":key},proj);
				});
				dispatch({ type: C.LOADED_ALL_PROJECTS, projects:projects });
			});
		}
	},

	// To be called when a user clicks a "submit" button in an edit field
	submitProjectUpdate: function(projectid,title,deadline,description){
		return function(dispatch,getState){
			// TODO - dispatch an action here that sets a spinner or something so the user knows he's waiting
			projectsRef.child(projectid).transaction(function(currentstatus){
				/*
				This could be writen as this, but bellow is more elegant ES6 way of writing.
				currentstatus.title = title;
				currentstatus.deadline = deadline;
				currentstatus.description = description;
				return currentstatus;
				*/
				return Object.assign(currentstatus,{title,deadline,description}); // we don't want to overwrite created etc
			},function(error){
				// TODO - dispatch new action here to stop spinner. And probably show error if there was any.
			});
		}
	},
	// To be called when a user submits a new project
	addNewProject: function(title,deadline,description){
		return function(dispatch,getState){
			// and probably spinner here first.

			var newref = projectsRef.push(),
				newid = newref.path.o[1], // found this out in console.log :P
				created = Date.now();

			newref.set({title,deadline,description,created},function(error,newref){
				console.log("PUSHED",newid);

				// Probably want to redirect here to project with newid
			});
		}
	},
	// To be called when a user clicks the "delete" button
	deleteProject: function(projectid){
		return function(dispatch,getState){
			// and probably spinner stuff here too
			projectsRef.child(projectid).remove(function(error){

			});
		}
	}
};
