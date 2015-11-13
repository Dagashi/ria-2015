var React = require("react");
var Router = require('react-router');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var TopSearch = require("./topsearch.js");
var ProjectForm = require("./projectform");

var History = Router.History;

var ProjectEdit = React.createClass({
	mixins: [ReactFireMixin, History],
	componentWillMount: function() {
		var project = new Firebase("https://fiery-inferno-569.firebaseio.com/projects/"+this.props.params.id);
		this.bindAsObject(project, "project");
	},
	getInitialState: function(){
		return {project: null};
	},
	render: function(){
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
								<h2>Edit - {(this.state.project != null) ? this.state.project.title : "Project Loading..." }</h2>
								<div className="clearfix"></div>
							</div>
							<div className="x_content">
								<br />

									<ProjectForm project={(this.state.project != null) ? this.state.project : null } />

							</div>
						</div>
					</div>
				</div>

				<div className="clearfix"></div>
			</div>
		);
	}
});

module.exports = ProjectEdit;
