/*
This is our top-level component. Sub-components matching specific routes will be
contained in `this.props.children` and rendered out.
*/

var React = require('react'),
	ReactRedux = require("react-redux"),
	C = require("../constants"),
	History = require("react-router").History;

var Sidebar = require("./sidebar");
var Topnav = require("./topnav");

var Wrapper = React.createClass({
	mixins: [ History ],
	componentWillMount: function() {
		if(this.props.auth.currently != C.LOGGED_IN && ! this.history.isActive("/login/") ) {
			this.history.replaceState(null, '/login/');
		}
	},
	render: function() {
		var content = "";
		
		//Do not show sidebar at login.
		if(this.history.isActive("/login/")) {
			content = (
				<div role="main">
					{this.props.children}
				</div>
			);
		}
		else {
			content = (
				<div>
					<Sidebar />

					<Topnav />

					<div className="right_col" role="main">
						{this.props.children}
					</div>
				</div>
			);
		}
		return (
			<div className="main_container">
				{content}
			</div>
		);
	}
});

// now we connect the component to the Redux store:
var mapStateToProps = function(appstate){
	// This component will have access to `appstate.auth` through `this.props.auth`
	return {auth:appstate.auth};
};

module.exports = ReactRedux.connect(mapStateToProps)(Wrapper);