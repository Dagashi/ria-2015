/*
This is our top-level component. Sub-components matching specific routes will be
contained in `this.props.children` and rendered out.
*/

var React = require('react'),
	ReactRedux = require("react-redux"),
	C = require("../constants"),
	actions = require("../actions"),
	History = require("react-router").History;

var Sidebar = require("./sidebar");
var Topnav = require("./topnav");

var Wrapper = React.createClass({
	mixins: [ History ],
	componentWillMount: function() {
		if(this.props.auth.currently != C.LOGGED_IN ) {
			this.history.replaceState(null, '/login/');
		}
	},
	logout: function(e) {
		e.preventDefault();
		this.props.logoutUser();
	},
	render: function() {
		var content = "";

		return (
			<div className="main_container">
				<Sidebar username={this.props.auth.username} logout={this.logout} />

				<Topnav  username={this.props.auth.username} logout={this.logout} />

				<div className="right_col" role="main">
					{this.props.children}
				</div>
			</div>
		);
	}
});

// now we connect the component to the Redux store:
var mapStateToProps = function(appstate){
	// This component will have access to `appstate.auth` through `this.props.auth`
	return {auth:appstate.auth};
};

var mapDispatchToProps = function(dispatch){
	return {
		logoutUser: function(){ dispatch(actions.logoutUser()); }
	}
};

module.exports = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(Wrapper);