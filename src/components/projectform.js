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
		var budget = this.refs.budget.value * 60;
		var desc = this.refs.description.value;
		if(this.props.uid) {
			var uid = this.props.uid;
			this.props.callback(uid,title,deadline,budget,desc);
		}
		else {
			this.props.callback(title,deadline,budget,desc);
		}
	},
	render: function(){
		var project = this.props.project || {};
		return (
			<form className="form-horizontal form-label-left">
				<div className="form-group">
					<label className="control-label col-md-3 col-sm-3 col-xs-12">Title</label>
					<div className="col-md-9 col-sm-9 col-xs-12">
						<input type="text" ref="title" className="form-control" placeholder="Title" defaultValue={project.title || "" } />
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-md-3 col-sm-3 col-xs-12">Deadline</label>
					<div className="col-md-3 col-sm-3 col-xs-12">
						<input type="text" ref="deadline" id="deadline" className="form-control" placeholder="YYYY-mm-dd" defaultValue={project.deadline || "" } />
					</div>
					
					<label className="control-label col-md-2 col-sm-2 col-xs-12">Budget</label>
					<div className="col-md-4 col-sm-4 col-xs-12 input-group">
						<input type="text" ref="budget" className="form-control" placeholder="Budget" defaultValue={project.budget || "" } />
						<div className="input-group-addon">hours</div>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-md-3 col-sm-3 col-xs-12">Description</label>
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
