/*
This is our top-level component. Sub-components matching specific routes will be
contained in `this.props.children` and rendered out.
*/

var React = require('react');

var Sidebar = require("./sidebar");
var Topnav = require("./topnav");

var Wrapper = React.createClass({
	render: function() {
		return (
			<div className="main_container">

				<Sidebar />

				<Topnav />

				<div className="right_col" role="main">
					{this.props.children}
				</div>
			</div>
		);
	}
});

module.exports = Wrapper;