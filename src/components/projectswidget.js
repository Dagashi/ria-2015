
var React = require('react');
var Bootstrap = require('react-bootstrap');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var ProjectRow = require("./projectrow");

var Navbar = Bootstrap.Navbar;
var NavBrand = Bootstrap.NavBrand;
var Nav = Bootstrap.Nav;
var NavItem = Bootstrap.NavItem;
var NavDropdown = Bootstrap.NavDropdown;
var MenuItem = Bootstrap.MenuItem;
var OverlayTrigger = Bootstrap.OverlayTrigger;
var Button = Bootstrap.Button;
var ButtonToolbar = Bootstrap.ButtonToolbar;
var Glyphicon = Bootstrap.Glyphicon;
var Tooltip = Bootstrap.Tooltip;
var Panel = Bootstrap.Panel;

var ProjectsWidget = React.createClass({
	mixins: [ReactFireMixin],
	componentWillMount: function() {
		var ref = new Firebase("https://fiery-inferno-569.firebaseio.com/projects");
		this.bindAsArray(ref, "projects");
	},
	getInitialState: function(){
		return {};
	},
	render: function(){
		var nrOfProjects = this.state.projects.length;

		var rows = [];
		for (var i=0; i < nrOfProjects; i++) {
			var tmpProject = this.state.projects[i];
			//TODO: calculate progress by number of tasks done.
			rows.push(<ProjectRow projectId={tmpProject[".key"]} name={tmpProject.title} created={tmpProject.created} progress="57" />);
		}

		if (!this.state.projects){
			return <div>Loading...</div>;
		}

		return (
			<div className={this.props.size}>
				<div className="x_panel">
					<div className="x_title">
						<h2>{this.props.title}</h2>
						<div className="clearfix"></div>
					</div>
					<div className="x_content">

						<p>The most recent projects you have been assigned.</p>


						<table className="table table-striped projects">
							<thead>
								<tr>
									<th style={{width: 1+"%"}}>#</th>
									<th style={{width: 25+"%"}}>Project Name</th>
									<th>Team Members</th>
									<th>Project Progress</th>
									<th style={{width: 10+"%"}}>Edit</th>
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
