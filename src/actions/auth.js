/*
This module contains action creators dealing with `appState.auth`
*/

var C = require("../constants"),
	Firebase = require("firebase"),
	fireRef = new Firebase(C.firebaseURL),
	History = require('../history');


module.exports = {
	// called at app start
	startListeningToAuth: function(){
		return function(dispatch,getState){
			fireRef.onAuth(function(authData){
				if (authData){ 
					dispatch({
						type: C.LOGIN_USER,
						uid: authData.uid,
						username: authData.github.displayName || authData.github.username
					});
				} else {
					if (getState().auth.currently !== C.ANONYMOUS){ // log out if not already logged out
						dispatch({type:C.LOGOUT});
					}
				}
			});
		}
	},
	attemptLogin: function(){
		return function(dispatch,getState){
			dispatch({type:C.ATTEMPTING_LOGIN});
			fireRef.authWithOAuthPopup("github", function(error, authData) {
				if (error) {
					dispatch({type:C.DISPLAY_ERROR,error:"Login failed! "+error});
					dispatch({type:C.LOGOUT});
				} else {
					if (authData){ 
						dispatch({
							type: C.LOGIN_USER,
							uid: authData.uid,
							username: authData.github.displayName || authData.github.username
						});
						//Redirect to dashboard after login
						History.replaceState(null, '/dashboard');
					}
				}
			});
		}
	},
	logoutUser: function(){
		return function(dispatch,getState){
			dispatch({type:C.LOGOUT}); // don't really need to do this, but nice to get immediate feedback
			fireRef.unauth();
			//Redirect to login-page after logout
		}
	}
};
