
var React = require('react');
var Bootstrap = require('react-bootstrap');
var Activity = require("./activity");

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

var ActivityWidget = React.createClass({
	render: function(){
		return (
			<div className="col-md-3 col-sm-3 col-xs-12">
				<div className="x_panel">
					<div className="x_title">
						<h2>Recent Activities <small>For assigned projects</small></h2>
						<div className="clearfix"></div>
					</div>
					<div className="x_content">
						<div className="dashboard-widget-content">
							<ul className="list-unstyled timeline widget">
								<Activity title="Finished design" action="#" created="20 min ago" by="Martin Svensson">A new design has been submited for the Panini project.</Activity>
								<Activity title="Tasks done" action="#" created="1 hour ago" by="Lisa Andersson">The tasks for RIA-project are all marked as done. Ready for quiality-check.</Activity>
								<Activity title="Invoice sent to client" action="#" created="3 hour ago" by="Richard Smith">Invoice sent to Panini AB.</Activity>
								<Activity title="New bug reported" action="#" created="4 hour ago" by="Marcus Löfgren">Panini Project: Responisive design breaks on Ipad landscape-mode.</Activity>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = ActivityWidget;
