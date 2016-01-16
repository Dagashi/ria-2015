var React = require("react");
var Bootstrap = require('react-bootstrap');
var Alert = Bootstrap.Alert;

var $ = require('jquery');
require('jquery-ui/datepicker');

var ProjectForm = React.createClass({
	componentDidMount: function(){
		$( "#deadline" ).datepicker({
			dateFormat: "yy-mm-dd"
		});
	},
	submit: function(e) {
		e.preventDefault();
		var title = this.refs.title.value;
		var deadline = this.refs.deadline.value;
		var desc = this.refs.description.value;
		if(this.props.uid) {
			var uid = this.props.uid;
			this.props.callback(uid,title,deadline,desc);
		}
		else {
			this.props.callback(title,deadline,desc);
		}
	},
	render: function(){
		var project = this.props.project || {};
		return (
			<form className="form-horizontal form-label-left">
				<div className="form-group">
					<label className="control-label col-md-3 col-sm-3 col-xs-12">Project title</label>
					<div className="col-md-9 col-sm-9 col-xs-12">
						<input type="text" ref="title" className="form-control" placeholder="Title" defaultValue={project.title || "" } />
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-md-3 col-sm-3 col-xs-12">Project deadline</label>
					<div className="col-md-9 col-sm-9 col-xs-12">
						<input type="text" ref="deadline" id="deadline" className="form-control" placeholder="Deadline" defaultValue={project.deadline || "" } />
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-md-3 col-sm-3 col-xs-12">Project description</label>
					<div className="col-md-9 col-sm-9 col-xs-12">
						<textarea className="form-control" ref="description" rows="3" placeholder="Description" defaultValue={project.description || ""} ></textarea>
					</div>
				</div>

				<div className="form-group">
					<div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
						<button onClick={this.submit}>Submit</button>
					</div>
				</div>

			</form>
		);
	}
});

module.exports = ProjectForm;
