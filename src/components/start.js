var React = require("react"),
	ReactRedux = require("react-redux"),
	actions = require("../actions"),
	C = require("../constants"),
	Link = require("react-router").Link;

var Start = React.createClass({
	render: function(){
		return (
			<div className="">
				<div id="wrapper">
					<h1>Project Kanri!</h1>
					More informaion will come soon.<br />
					<Link to="/login/" className="btn btn-default">Go to login-page.</Link>
				</div>
			</div>
		);
	}
});

module.exports = Start;
