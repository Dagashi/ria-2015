var React = require("react");
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var ProjectForm = require("./projectform");

var ProjectAdd = React.createClass({
	mixins: [ReactFireMixin],
	componentWillMount: function() {
		if(this.props.params.id != null) {
			var project = new Firebase("https://fiery-inferno-569.firebaseio.com/projects/"+this.props.params.id);
			this.bindAsObject(project, "project");
		}
	},
	getInitialState: function(){
		return {project: null};
	},
	handleChange: function(event) {
		this.setState({value: event.target.value});
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
	editProject: function(e){
		e.preventDefault();

		var ProjectsRef = new Firebase("https://fiery-inferno-569.firebaseio.com/projects/"+this.props.params.id);

		var projectTitle = this.refs.title.value;
		var projectDeadline = this.refs.deadline.value;
		var projectDescription = this.refs.description.value;
		var projectEdited = new Date().toString();

		// message when the data has finished synchronizing.
		var onComplete = function(error) {
			if (error) {
				console.log('Synchronization failed');
			} else {
				console.log('Synchronization succeeded');
			}
		};

		var project = ProjectsRef.update({
			title: projectTitle,
			edited: projectEdited,
			deadline: projectDeadline,
			description: projectDescription
		}, onComplete);
	},
	render: function(){
		var header = "";
		var button = "";
		if(this.state.project != null) {
			header = "Edit project - "+this.state.project.title;
			button = (<button onClick={ this.editProject.bind(this) } className='btn btn-success'>Save</button>);
		}
		else {
			header = "New project";
			button = (<button onClick={ this.addProject.bind(this) } className='btn btn-success'>Create project</button>);
		}

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
								<h2>{header}</h2>
								<div className="clearfix"></div>
							</div>
							<div className="x_content">
								<br />
								<form className="form-horizontal form-label-left">

									<ProjectForm project={(this.state.project != null) ? this.state.project : null } />

									<div className="ln_solid"></div>

									<div className="form-group">
										<div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
											{button}
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
