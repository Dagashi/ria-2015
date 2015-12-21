
var React = require('react'),
	Bootstrap = require('react-bootstrap'),
	Navbar = Bootstrap.Navbar,
	NavBrand = Bootstrap.NavBrand,
	Nav = Bootstrap.Nav,
	NavItem = Bootstrap.NavItem,
	NavDropdown = Bootstrap.NavDropdown,
	MenuItem = Bootstrap.MenuItem,
	Badge = Bootstrap.Badge;

var icon = (
	<a href="#" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
		<i className="fa fa-bell-o"></i>
		<Badge className="bg-green" >3</Badge>
	</a>
);

var Topnav = React.createClass({
	render: function(){
		return (
			<div className="top_nav">
				<div className="nav_menu">
					<Nav eventKey={0}>
						<Navbar right toggleNavKey={2}>
							<Nav right eventKey={3}>
								<NavDropdown eventKey={3} title={this.props.username} id="collapsible-navbar-dropdown" className="dropdown-menu dropdown-usermenu pull-right" >
									<MenuItem href="#" eventKey="4">Profile</MenuItem>
									<MenuItem href="#" eventKey="5"><Badge pullRight >50%</Badge>Settings</MenuItem>
									<MenuItem href="#" eventKey="6">Help</MenuItem>
									<MenuItem href="#/dashboard/" eventKey="7" onSelect={ this.props.logout }><i className="fa fa-sign-out pull-right"></i> Log Out</MenuItem>
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