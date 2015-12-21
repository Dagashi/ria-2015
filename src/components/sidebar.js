
var React = require('react');
var Router = require("react-router");
var Bootstrap = require('react-bootstrap');

var Link = Router.Link;
var IndexLink = Router.IndexLink;
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

var menuStyle = {
	display: 'none'
};

const tooltip1 = (
	<Tooltip id="settings">Settings</Tooltip>
);
const tooltip2 = (
	<Tooltip id="Fullscreen">Fullscreen</Tooltip>
);
const tooltip3 = (
	<Tooltip id="Lock">Lock</Tooltip>
);
const tooltip4 = (
	<Tooltip id="Logout">Logout</Tooltip>
);

var Sidebar = React.createClass({
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
			<div className="col-md-3 left_col">
				<div className="left_col scroll-view">

					<div className="navbar nav_title">
						<a href="index.html" className="site_title">
							<i className="fa fa-sitemap"></i>
							<span> Project Kanri</span>
						</a>
					</div>
					<div className="clearfix"></div>

					<div className="profile">
						<div className="profile_pic">
							<img src="images/anonymous_user_icon.jpg" alt="..." className="img-circle profile_img" />
						</div>
						<div className="profile_info">
							<span>Welcome,</span>
							<h2>{this.props.username}</h2>
						</div>
					</div>

					<br />

					<div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
						<div className="menu_section">
							<ul className="nav side-menu">
								<li>
									<Link to="/dashboard/"><i className="fa fa-home"></i> Dashboard </Link>
								</li>
								<li><a href="#" onClick={ this.eventHandler.bind(this, 1) } ><i className="fa fa-briefcase"></i> Projects <span className="fa fa-chevron-down"></span></a>
									<Panel collapsible expanded={this.state.menuProjectsOpen}>
										<ul className="nav child_menu">
											<li><Link to="/project-new/">New Project</Link></li>
											<li><Link to="/projects/">Active Projects</Link></li>
											<li><a href="#">Finished Projects</a></li>
										</ul>
									</Panel>
								</li>
								<li><a href="#" onClick={ this.eventHandler.bind(this, 2) } ><i className="fa fa-list-alt"></i> Tasks <span className="fa fa-chevron-down"></span></a>
									<Panel collapsible expanded={this.state.menuTasksOpen}>
										<ul className="nav child_menu">
											<li><a href="#">New Task</a></li>
											<li><a href="#">Assigned Tasks</a></li>
											<li><a href="#">Bug tickets</a></li>
											<li><a href="#">Finished Tasks</a></li>
										</ul>
									</Panel>
								</li>
								<li>
									<a href="#"><i className="fa fa-file"></i> Files </a>
								</li>
								<li><a href="#" onClick={ this.eventHandler.bind(this, 3) } ><i className="fa fa-bar-chart-o"></i> Reports <span className="fa fa-chevron-down"></span></a>
									<Panel collapsible expanded={this.state.menuReportsOpen}>
										<ul className="nav child_menu">
											<li><a href="#">Projects</a></li>
											<li><a href="#">Tasks</a></li>
											<li><a href="#">User time</a></li>
											<li><a href="#">Unit Tests</a></li>
										</ul>
									</Panel>
								</li>
							</ul>
						</div>
					</div>

					<ButtonToolbar className="sidebar-footer hidden-small">
						<OverlayTrigger placement="top" overlay={tooltip1}>
							<Button bsStyle="default" href="#">
								<Glyphicon glyph="cog" />
							</Button>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={tooltip2}>
							<Button bsStyle="default" href="#">
								<Glyphicon glyph="fullscreen" />
							</Button>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={tooltip3}>
							<Button bsStyle="default" href="#">
								<Glyphicon glyph="eye-close" />
							</Button>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={tooltip4}>
							<Button bsStyle="default" href="#" onClick={ this.props.logout } >
								<Glyphicon glyph="off" />
							</Button>
						</OverlayTrigger>
					</ButtonToolbar>

				</div>
			</div>
		);
	}
});

module.exports = Sidebar;
