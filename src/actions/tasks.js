/*
This module contains action creators dealing with `appState.tasks`
They are functions which will return an object describing the actions.
These actions are imported by Redux-aware components who need them
*/

var C = require("../constants"),
	Firebase = require("firebase"),
	tasksRef = new Firebase(C.firebaseURL).child("tasks"),
	_ = require("lodash");

module.exports = {
	// called when the app starts
	startListeningToTasks: function(){
		return function(dispatch,getState){
			tasksRef.on("value",function(snapshot){
				var tasks = _.mapValues(snapshot.val(),function(task,key){
					return Object.assign({".key":key},task);
				});
				dispatch({ type: C.LOADED_ALL_TASKS, tasks:tasks });
			});
		}
	},
	// To be called when a user clicks a "submit" button in an edit field
	submitTaskUpdate: function(projectid,title,deadline,description){
		return function(dispatch,getState){
			// TODO - dispatch an action here that sets a spinner or something so the user knows he's waiting
			tasksRef.child(projectid).child(taskid).transaction(function(currentstatus){
				return Object.assign(currentstatus,{title,deadline,description}); // we don't want to overwrite created etc
			},function(error){
				// TODO - dispatch new action here to stop spinner. And probably show error if there was any.
			});
		}
	},
	// To be called when a user submits a new task
	addNewTask: function(projectid,title,deadline,description){
		return function(dispatch,getState){
			// and probably spinner here first.

			var newref = tasksRef.child(projectid).push(),
				newid = newref.path.o[1],
				created = Date.now();

			newref.set({title,deadline,description,created},function(error,newref){
				console.log("PUSHED",newid);

				// Probably want to redirect here to task with newid
			});
		}
	},
	// To be called when a user clicks the "delete" button
	deleteTask: function(projectid,taskid){
		return function(dispatch,getState){
			// and probably spinner stuff here too
			tasksRef.child(projectid).child(taskid).remove(function(error){

			});
		}
	}
};
