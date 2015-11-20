var React = require('react');
var Bootstrap = require('react-bootstrap');
var Task = require("./task");
var ReactRedux = require("react-redux");

var OverlayTrigger = Bootstrap.OverlayTrigger;
var Button = Bootstrap.Button;
var Glyphicon = Bootstrap.Glyphicon;
var Tooltip = Bootstrap.Tooltip;

var _ = require("lodash");

var TasksWidget = React.createClass({
	render: function(){
		var tasks = this.props.tasks[this.props.projectId];
			rows = _.map(tasks,function(t){return <Task task={t} />});

		var tooltip = (
			<Tooltip>Create a new task for this project</Tooltip>
		);
		var addButton = (
			<OverlayTrigger placement="top" overlay={tooltip}>
				<Button bsStyle="success" href="#/project-new/" className="stats-action pull-right">
					<Glyphicon glyph="plus" />
				</Button>
			</OverlayTrigger>
		);

		return (
			<div className={this.props.size}>
				<div className="x_panel">
					<div className="x_title">
						<h2>{this.props.title}</h2>
						{addButton}

						<div className="clearfix"></div>
					</div>
					<div className="x_content">

						<p>The most recent projects you have been assigned.</p>

						<table className="table table-striped projects">
							<thead>
								<tr>
									<th style={{width: 5+"%"}}></th>
									<th>Assigned</th>
									<th>Task</th>
									<th style={{width: 15+"%"}}></th>
								</tr>
							</thead>
							<tbody>
								{rows}
							</tbody>
						</table>

					</div>
				</div>
			</div>
		);
	}
});

module.exports = TasksWidget;

// now we connect the component to the Redux store:

var mapStateToProps = function(appstate){
	// This component will have access to `appstate.tasks` through `this.props.tasks`
	return {tasks:appstate.tasks};
};

module.exports = ReactRedux.connect(mapStateToProps)(TasksWidget);
