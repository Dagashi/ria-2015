var React = require("react");
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var firebaseURL = require("../constants").firebaseURL;

var ProjectForm = React.createClass({
	mixins: [ReactFireMixin],
	addProject: function(e){
		e.preventDefault();

		var ref = new Firebase(firebaseURL);
		var ProjectsRef = ref.child("projects");

		var projectTitle = this.refs.title.value;
		var projectDeadline = this.refs.deadline.value;
		var projectDescription = this.refs.description.value;
		var now = new Date(); 
		var projectCreated = now.toLocaleDateString()+" "+now.toLocaleTimeString();

		// message when the data has finished synchronizing.
		var onComplete = function(error) {
			if (error) {
				console.log('Synchronization failed');
			} else {
				this.refs.title.value = "";
				this.refs.deadline.value = "";
				this.refs.description.value = "";
				
			}
		};

		var newProjectRef = ProjectsRef.push();
		newProjectRef.set({
			title: projectTitle,
			created: projectCreated,
			deadline: projectDeadline,
			description: projectDescription
		}, onComplete);
	},
	editProject: function(e){
		e.preventDefault();

		var ProjectsRef = new Firebase(firebaseURL+"/projects/"+this.props.project[".key"]);

		var projectTitle = this.refs.title.value;
		var projectDeadline = this.refs.deadline.value;
		var projectDescription = this.refs.description.value;
		var now = new Date(); 
		var projectEdited = now.toLocaleDateString()+" "+now.toLocaleTimeString();

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
		var project = this.props.project;
		var button = "";
		console.log(project);
		if(project != "create new") {
			button = (<button onClick={ this.editProject.bind(this) } className='btn btn-success'>Save</button>);
		}
		else {
			button = (<button onClick={ this.addProject.bind(this) } className='btn btn-success'>Create project</button>);
		}
		
		if (!project && project != "create new" ){
			return <p>Loading!</p>;
		}
		return (
			<form className="form-horizontal form-label-left">
				<div className="form-group">
					<label className="control-label col-md-3 col-sm-3 col-xs-12">Project title</label>
					<div className="col-md-9 col-sm-9 col-xs-12">
						<input type="text" ref="title" className="form-control" placeholder="Title" defaultValue={(project != null || project != "create new") ? project.title : "" } />
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-md-3 col-sm-3 col-xs-12">Project deadline</label>
					<div className="col-md-9 col-sm-9 col-xs-12">
						<input type="text" ref="deadline" className="form-control" placeholder="Deadline" defaultValue={(project != null || project != "create new") ? project.deadline : "" } />
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-md-3 col-sm-3 col-xs-12">Project description</label>
					<div className="col-md-9 col-sm-9 col-xs-12">
						<textarea className="form-control" ref="description" rows="3" placeholder="Description" defaultValue={(project != null || project != "create new") ? project.description : "" } ></textarea>
					</div>
				</div>
				<div className="ln_solid"></div>

				<div className="form-group">
					<div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
						{button}
					</div>
				</div>

			</form>
		);
	}
});

module.exports = ProjectForm;
