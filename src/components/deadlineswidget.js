
var React = require('react');
var Bootstrap = require('react-bootstrap');
var Deadline = require("./deadline");

var Glyphicon = Bootstrap.Glyphicon;
var Tooltip = Bootstrap.Tooltip;
var Panel = Bootstrap.Panel;

var DeadlinesWidget = React.createClass({
	render: function(){
		return (
			<div className="col-md-3 col-sm-3 col-xs-12">
				<div className="x_panel">
					<div className="x_title">
						<h2>Deadlines <small>Coming up</small></h2>
						<div className="clearfix"></div>
					</div>
					<div className="x_content deadlines">
						<Deadline title="Task deadline" action="#" month="Nov" day="25">Fix Database issue #2554</Deadline>
						<Deadline title="Project deadline" action="#" month="Nov" day="31">Panini project deliver demo</Deadline>
						<Deadline title="Task deadline" action="#" month="Dec" day="2">Fix Design issue #3471</Deadline>
						<Deadline title="Meeting" action="#" month="Dec" day="5">Fix Design issue #3471</Deadline>
						<Deadline title="Project deadline" action="#" month="Dec" day="10">Christmas redesign of Toys-project</Deadline>
						<Deadline title="Task deadline" action="#" month="Jan" day="4">Fix 404-crash issue #571</Deadline>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = DeadlinesWidget;
