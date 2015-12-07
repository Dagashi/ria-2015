var React = require("react"),
	ReactRedux = require("react-redux"),
	actions = require("../actions"),
	C = require("../constants"),
	Link = require("react-router").Link;

var Login = React.createClass({
	render: function(){
		var p = this.props;
		var auth = p.auth;
		switch(auth.currently){
			case C.LOGGED_IN: return (
				<div className="login">
					<span>Logged in as {auth.username}.</span>
					{' '}<button onClick={p.logoutUser}>Log out</button>
				</div>
			);
			case C.AWAITING_AUTH_RESPONSE: return (
				<div className="login">
					<button disabled><i className="fa fa-spinner fa-spin"></i> authenticating...</button>
				</div>
			);
			default: return (
				<div className="login">
					<button onClick={p.attemptLogin}>Log in</button>
				</div>
			);
		}
	}
});

// now we connect the component to the Redux store:
var mapStateToProps = function(appState){
	// This component will have access to `appState.auth` through `this.props.auth`
	return {auth:appState.auth};
};

var mapDispatchToProps = function(dispatch){
	return {
		attemptLogin: function(){ dispatch(actions.attemptLogin()); },
		logoutUser: function(){ dispatch(actions.logoutUser()); }
	}
};

module.exports = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(Login);
