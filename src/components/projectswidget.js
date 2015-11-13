var React = require('react');
var Bootstrap = require('react-bootstrap');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var firebaseURL = require("../constants").firebaseURL;
var ProjectRow = require("./projectrow");

var OverlayTrigger = Bootstrap.OverlayTrigger;
var Button = Bootstrap.Button;
var Glyphicon = Bootstrap.Glyphicon;
var Tooltip = Bootstrap.Tooltip;


var ProjectsWidget = React.createClass({
	mixins: [ReactFireMixin],
	componentWillMount: function() {
		var projects = new Firebase(firebaseURL+"/projects");
		this.bindAsArray(projects, "projects");
	},
	getInitialState: function(){
		return {};
	},
	render: function(){
		var nrOfProjects = this.state.projects.length;

		var rows = [];
		for (var i=0; i < nrOfProjects; i++) {
			rows.push(<ProjectRow project={this.state.projects[i]} />);
		}

		if (!this.state.projects){
			return <div>Loading...</div>;
		}

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
