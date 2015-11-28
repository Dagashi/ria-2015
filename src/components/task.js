var React = require('react');
var Router = require("react-router");
var Bootstrap = require('react-bootstrap');
var ReactRedux = require("react-redux");
var actions = require("../actions/");

var Link = Router.Link;
var Tooltip = Bootstrap.Tooltip;
var ProgressBar = Bootstrap.ProgressBar;
var Button = Bootstrap.Button;
var Modal = Bootstrap.Modal;

var _ = require("lodash");

var Task = React.createClass({
	getInitialState() {
		return { showTask: false };
	},
	closeTask() {
		this.setState({ showTask: false });
	},
	openTask: function(e) {
		this.setState({ showTask: true });
		e.preventDefault();
	},
	removeTask: function(e) {
		e.preventDefault();
		if (confirm("This will permanently remove this Task from the database. Are you sure you want to do this?")) {
			this.props.deleteproject(this.props.params.id);
		}
	},
	render: function(){
		console.log(this.props.task);
		//TODO: get user assigned to the task.
		var edited = "";
		if(this.props.task.edited) {
			editTime = new Date(this.props.task.edited);
			edited = (<span><br /><small>Edited {editTime.toLocaleDateString()} - {editTime.toLocaleTimeString()}</small></span>);
		}
		created = new Date(this.props.task.created);
		return (
			<tr>
				<td>
					<input type="checkbox" />
				</td>
				<td>
					<ul className="list-inline">
						<li>
							<img src="images/anonymous_user_icon.jpg" className="avatar" alt="Avatar" />
						</li>
					</ul>
				</td>
				<td>
					<a href="#" onClick={ this.openTask } >{this.props.task.title}</a>

					<Modal show={this.state.showTask} onHide={this.closeTask}>
						<Modal.Header closeButton>
							<Modal.Title>Details about task</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<div>
								<strong>Title:</strong> {this.props.task.title} <br/>
								<strong>Created:</strong> {created.toLocaleDateString()} - {created.toLocaleTimeString()}
								{edited} <br/>
								<strong>Description:</strong> <br/>
								{this.props.task.description}
							</div>
						</Modal.Body>
						<Modal.Footer>
						</Modal.Footer>
					</Modal>

					<br />
					{_.trunc(this.props.task.description, 50)}
					<br />
					<small>Created {created.toLocaleDateString()} - {created.toLocaleTimeString()}</small>
					{edited}
				</td>
				<td>
					<Link to={"/task-edit/"+this.props.task[".key"]} className="btn btn-default btn-xs"><i className="fa fa-pencil"></i></Link>
					<a href="#" onClick={ this.removeTask.bind(this) } className="btn btn-default btn-xs"><i className="fa fa-trash"></i></a>
				</td>
			</tr>
		);
	}
});

var mapDispatchToProps = function(dispatch){
	return {
		deleteTask: function(projectid, taskId){
			dispatch(actions.deleteTask(projectid, taskId));
		}
	}
};

module.exports = ReactRedux.connect(mapDispatchToProps)(Task);
