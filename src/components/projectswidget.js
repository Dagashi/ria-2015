
var React = require('react');
var Bootstrap = require('react-bootstrap');
var ProjectRow = require("./projectrow.js");

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
	render: function(){
		return (
			<div className="row">
				<div className="col-md-6">
					<div className="x_panel">
						<div className="x_title">
							<h2>Recent Projects</h2>
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
									<ProjectRow projectId="1" url="#" name="The awesome project 1" created="01.01.2015" progress="57" />
									<ProjectRow projectId="2" url="#" name="The panini propject" created="06.09.2015" progress="40" />
									<ProjectRow projectId="3" url="#" name="RIA-project" created="23.10.2015" progress="10" />
								</tbody>
							</table>

						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = ProjectsWidget;
