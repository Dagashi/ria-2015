var React = require('react');
var Bootstrap = require('react-bootstrap');
var ProjectRow = require("./projectrow");
var ReactRedux = require("react-redux");

var OverlayTrigger = Bootstrap.OverlayTrigger;
var Button = Bootstrap.Button;
var Glyphicon = Bootstrap.Glyphicon;
var Tooltip = Bootstrap.Tooltip;

var _ = require("lodash");

var ProjectsWidget = React.createClass({
	render: function(){
		var projects = this.props.projects;
			rows = _.map(projects,function(p){return <ProjectRow project={p} />}); 	

		var tooltip = (
			<Tooltip>Create a new project</Tooltip>
		);
		var addButton = (
			<OverlayTrigger placement="top" overlay={tooltip}>
				<Button bsStyle="success" href="#/project-new/" className="stats-action pull-right">
					<Glyphicon glyph="plus" />
				</Button>
			</OverlayTrigger>
		);

		return (
			<div className={this.props.size}>
				<div className="x_panel">
					<div className="x_title">
						<h2>{this.props.title}</h2>
						{addButton}

						<div className="clearfix"></div>
					</div>
					<div className="x_content">

						<p>The most recent projects you have been assigned.</p>

						<table className="table table-striped projects">
							<thead>
								<tr>
									<th style={{width: 25+"%"}}>Project Name</th>
									<th>Team Members</th>
									<th>Project Progress</th>
									<th style={{width: 15+"%"}}>Edit</th>
								</tr>
							</thead>
							<tbody>
								{rows}
							</tbody>
						</table>

					</div>
				</div>
			</div>
		);
	}
});

module.exports = ProjectsWidget;

// now we connect the component to the Redux store:

var mapStateToProps = function(appstate){
	// This component will have access to `appstate.projects` through `this.props.projects`
	return {projects:appstate.projects};
};

module.exports = ReactRedux.connect(mapStateToProps)(ProjectsWidget);
