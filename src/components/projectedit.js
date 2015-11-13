var React = require("react");
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var TopSearch = require("./topsearch.js");
var ProjectForm = require("./projectform");

var ProjectEdit = React.createClass({
	mixins: [ReactFireMixin],
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
