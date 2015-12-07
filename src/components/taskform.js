var React = require("react");
var Bootstrap = require('react-bootstrap');

var Alert = Bootstrap.Alert;

var TaskForm = React.createClass({
	submit: function(){
		var title = this.refs.title.value;
		var deadline = this.refs.deadline.value;
		var desc = this.refs.description.value;
		this.props.callback(this.props.projectId,title,deadline,desc);
		this.props.closeAddTask();
	},
	render: function(){
		var task = this.props.task || {};
		return (
			<form className="form-horizontal form-label-left">
				<div className="form-group">
					<label className="control-label col-md-3 col-sm-3 col-xs-12">Task title</label>
					<div className="col-md-9 col-sm-9 col-xs-12">
						<input type="text" ref="title" className="form-control" placeholder="Title" defaultValue={task.title || "" } />
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-md-3 col-sm-3 col-xs-12">Task deadline</label>
					<div className="col-md-9 col-sm-9 col-xs-12">
						<input type="text" ref="deadline" className="form-control" placeholder="Deadline" defaultValue={task.deadline || "" } />
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-md-3 col-sm-3 col-xs-12">Task description</label>
					<div className="col-md-9 col-sm-9 col-xs-12">
						<textarea className="form-control" ref="description" rows="3" placeholder="Description" defaultValue={task.description || ""} ></textarea>
					</div>
				</div>

				<div className="form-group">
					<div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
						<button className="btn btn-success" onClick={this.submit}>Create Task</button>
					</div>
				</div>

			</form>
		);
	}
});

module.exports = TaskForm;
