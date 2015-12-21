var React = require("react");
var Router = require('react-router');
var TopSearch = require("./topsearch.js");
var ProjectForm = require("./projectform");
var ReactRedux = require("react-redux");
var History = Router.History;
var actions = require("../actions/");

var ProjectEdit = React.createClass({
	mixins: [History],
	render: function(){
		var projectid = this.props.params.id,
			project = this.props.projects[projectid];
		if (!project) {
			return <p>Loading...</p>;
		}
		return (
			<div>
				<div className="page-title">
					<div className="title_left">
						<h3>Edit Project</h3>
					</div>

					<TopSearch />
				</div>
				<div className="clearfix"></div>

				<div className="row">
					<div className="col-md-6 col-xs-12">
						<div className="x_panel">
							<div className="x_title">
								<button className="btn btn-default btn-sm pull-left" onClick={this.history.goBack}><i className="fa fa-arrow-left"></i></button>
								<h2>Edit - {project.title}</h2>
								<div className="clearfix"></div>
							</div>
							<div className="x_content">
								<br />
									<ProjectForm project={project} callback={this.props.updateproject.bind(this,projectid)} users={this.props.users} />
							</div>
						</div>
					</div>
				</div>

				<div className="clearfix"></div>
			</div>
		);
	}
});


// now we connect the component to the Redux store:

var mapStateToProps = function(appstate){
	// This component will have access to `appstate.projects` through `this.props.projects`
	return {
		projects:appstate.projects,
		users: appstate.users
	};
};

var mapDispatchToProps = function(dispatch){
	return {
		updateproject: function(projectid,title,deadline,desc){
			dispatch(actions.submitProjectUpdate(projectid,title,deadline,desc));
		}
	}
};

module.exports = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(ProjectEdit);
