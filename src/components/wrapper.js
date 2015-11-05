/*
This is our top-level component. Sub-components matching specific routes will be
contained in `this.props.children` and rendered out.
*/

var React = require('react');

var Wrapper = React.createClass({
	render: function() {
		return (
			<div className="wrapper row col-md-12">
				<h2>Hello World App</h2>
				{this.props.children}
			</div>
		);
	}
});

module.exports = Wrapper;