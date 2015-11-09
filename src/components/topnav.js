
var React = require('react');
var Bootstrap = require('react-bootstrap');

var Navbar = Bootstrap.Navbar;
var NavBrand = Bootstrap.NavBrand;
var Nav = Bootstrap.Nav;
var NavItem = Bootstrap.NavItem;
var NavDropdown = Bootstrap.NavDropdown;
var MenuItem = Bootstrap.MenuItem;
var Badge = Bootstrap.Badge;
var OverlayTrigger = Bootstrap.OverlayTrigger;
var Button = Bootstrap.Button;
var ButtonToolbar = Bootstrap.ButtonToolbar;
var Glyphicon = Bootstrap.Glyphicon;
var Tooltip = Bootstrap.Tooltip;
var Panel = Bootstrap.Panel;

var menuStyle = {
	display: 'none'
};

const tooltip1 = (
	<Tooltip>Settings</Tooltip>
);
const tooltip2 = (
	<Tooltip>Fullscreen</Tooltip>
);
const tooltip3 = (
	<Tooltip>Lock</Tooltip>
);
const tooltip4 = (
	<Tooltip>Logout</Tooltip>
);

var icon = (
	<a href="#" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
		<i className="fa fa-bell-o"></i>
		<Badge className="bg-green" >3</Badge>
	</a>
);

var Topnav = React.createClass({
	getInitialState: function() {
		return {
			menuProjectsOpen: false,
			menuTasksOpen: false,
			menuReportsOpen: false
		};
	},
	eventHandler: function(item, e) {
		if(item === 1) {
			this.setState({ menuProjectsOpen: !this.state.menuProjectsOpen });
		}
		if(item === 2) {
			this.setState({ menuTasksOpen: !this.state.menuTasksOpen });
		}
		if(item === 3) {
			this.setState({ menuReportsOpen: !this.state.menuReportsOpen });
		}
		e.preventDefault();
	},
	render: function(){
		return (
			<div className="top_nav">
				<div className="nav_menu">
					<Nav eventKey={0}>
						<Navbar right toggleNavKey={2}>
							<Nav right eventKey={3}>
								<NavDropdown eventKey={3} title="David Strömbom" id="collapsible-navbar-dropdown" className="dropdown-menu dropdown-usermenu pull-right" >
									<MenuItem href="#" eventKey="4">Profile</MenuItem>
									<MenuItem href="#" eventKey="5"><Badge pullRight >50%</Badge>Settings</MenuItem>
									<MenuItem href="#" eventKey="6">Help</MenuItem>
									<MenuItem href="#" eventKey="7"><i className="fa fa-sign-out pull-right"></i> Log Out</MenuItem>
								</NavDropdown>

								<NavDropdown eventKey={8} title={icon} id="collapsible-navbar-dropdown" className="dropdown-menu dropdown-usermenu pull-right top-notifications" >
									<MenuItem href="#" eventKey="9" className="fadeInDown animated">
										<span className="image">
											<img src="images/anonymous_user_icon.jpg" alt="Profile Image" />
										</span>
										<span>
											<span>John Smith</span>
											<span className="time">3 mins ago</span>
										</span>
										<span className="message">
											Film festivals used to be do-or-die moments for movie makers. They were where... 
										</span>
									</MenuItem>
									<MenuItem href="#" eventKey="9" className="fadeInDown animated">
										<span className="image">
											<img src="images/anonymous_user_icon.jpg" alt="Profile Image" />
										</span>
										<span>
											<span>John Smith</span>
											<span className="time">1 hour ago</span>
										</span>
										<span className="message">
											Lorem ipsum dolor... 
										</span>
									</MenuItem>
								</NavDropdown>
							</Nav>

						</Navbar>

					</Nav>
				</div>

			</div>
		);
	}
});

module.exports = Topnav;
