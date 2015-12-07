/*
This is our top-level component. Sub-components matching specific routes will be
contained in `this.props.children` and rendered out.
*/

var React = require('react'),
	ReactRedux = require("react-redux"),
	C = require("../constants");

var Sidebar = require("./sidebar");
var Topnav = require("./topnav");

var Wrapper = React.createClass({
	render: function() {
		var content = "";
		
		//Only show Sidebar and topnav if loggedin
		if(this.props.auth.currently === "LOGGED_IN") {
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
		else {
			content = (
				<div role="main">
					{this.props.children}
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