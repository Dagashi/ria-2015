var React = require("react");
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var ProjectsWidget = require("./projectswidget");

var ProjectAdd = React.createClass({
	mixins: [ReactFireMixin],
	componentWillMount: function() {
		
	},
	getInitialState: function(){
		return {};
	},
	addProject: function(e){
		e.preventDefault();

		var ref = new Firebase("https://fiery-inferno-569.firebaseio.com/");
		var ProjectsRef = ref.child("projects");

		var projectTitle = this.refs.title.value;
		var projectDeadline = this.refs.deadline.value;
		var projectDescription = this.refs.description.value;
		var projectCreated = new Date().toLocaleDateString();

		var newProjectRef = ProjectsRef.push();
		newProjectRef.set({
			title: projectTitle,
			created: projectCreated,
			deadline: projectDeadline,
			description: projectDescription
		});
	},
	render: function(){
		return (
			<div>
				<div className="page-title">
					<div className="title_left">
						<h3>
							Create new Project
						</h3>
					</div>

					<div className="title_right">
						<div className="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
							<div className="input-group">
								<input className="form-control" placeholder="Search for..." type="text" />

								<span className="input-group-btn">
									<button className="btn btn-default" type="button">Go!</button>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="clearfix"></div>

				<div className="row">
					<div className="col-md-6 col-xs-12">
						<div className="x_panel">
							<div className="x_title">
								<h2>New project</h2>
								<div className="clearfix"></div>
							</div>
							<div className="x_content">
								<br />
								<form className="form-horizontal form-label-left">

									<div className="form-group">
										<label className="control-label col-md-3 col-sm-3 col-xs-12">Project title</label>
										<div className="col-md-9 col-sm-9 col-xs-12">
											<input type="text" ref="title" className="form-control" placeholder="Title" />
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-md-3 col-sm-3 col-xs-12">Project deadline</label>
										<div className="col-md-9 col-sm-9 col-xs-12">
											<input type="text" ref="deadline" className="form-control" placeholder="Deadline" />
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-md-3 col-sm-3 col-xs-12">Project description</label>
										<div className="col-md-9 col-sm-9 col-xs-12">
											<textarea className="form-control" ref="description" rows="3" placeholder="Description" ></textarea>
										</div>
									</div>

									<div className="ln_solid"></div>

									<div className="form-group">
										<div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
											<button onClick={ this.addProject.bind(this) } className="btn btn-success">Create project</button>
										</div>
									</div>

								</form>
							</div>
						</div>
					</div>
				</div>

				<div className="clearfix"></div>
			</div>
		);
	}
});

module.exports = ProjectAdd;
