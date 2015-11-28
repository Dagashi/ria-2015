var React = require('react');
var Bootstrap = require('react-bootstrap');
var Task = require("./task");
var ReactRedux = require("react-redux");
var actions = require("../actions/");
var TaskForm = require("./taskform");

var OverlayTrigger = Bootstrap.OverlayTrigger;
var Button = Bootstrap.Button;
var Glyphicon = Bootstrap.Glyphicon;
var Tooltip = Bootstrap.Tooltip;
var Modal = Bootstrap.Modal;

var _ = require("lodash");

var TasksWidget = React.createClass({
	getInitialState() {
		return { showAddTask: false };
	},
	closeAddTask() {
		this.setState({ showAddTask: false });
	},
	openAddTask() {
		this.setState({ showAddTask: true });
	},
	render: function(){
		var tasks = this.props.tasks[this.props.projectId];
		var rows = _.map(tasks,function(t){ return <Task task={t} /> });

		var addButton = (
			<Button bsStyle="success" onClick={this.openAddTask} className="stats-action pull-right">
				<Glyphicon glyph="plus" />
			</Button>
		);

		return (
			<div className={this.props.size}>
				<div className="x_panel">
					<div className="x_content">
						{addButton}

						<Modal show={this.state.showAddTask} onHide={this.closeAddTask}>
							<Modal.Header closeButton>
								<Modal.Title>Add new Task</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<TaskForm projectId={this.props.projectId} callback={this.props.addNewTask.bind(this,this.props.projectId)} closeAddTask={this.closeAddTask.bind(this)} />
							</Modal.Body>
							<Modal.Footer>
							</Modal.Footer>
						</Modal>

						<p>The tasks for this project.</p>

						<table className="table table-striped projects">
							<thead>
								<tr>
									<th style={{width: 5+"%"}}></th>
									<th style={{width: 15+"%"}}>Assigned</th>
									<th>Task</th>
									<th style={{width: 20+"%"}}></th>
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

var mapDispatchToProps = function(dispatch){
	return {
		addNewTask: function(projectid,title,deadline,desc){
			dispatch(actions.addNewTask(projectid,title,deadline,desc));
		}
	}
};

module.exports = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(TasksWidget);
