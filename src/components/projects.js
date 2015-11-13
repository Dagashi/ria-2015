var React = require("react");
var Router = require("react-router");
var TopSearch = require("./topsearch.js");
var ProjectsWidget = require("./projectswidget");

var Link = Router.Link;

var Projects = React.createClass({
	render: function(){
		return (
			<div>
				<div className="page-title">
					<div className="title_left">
						<h3>
							Projects
						</h3>
					</div>

					<TopSearch />
				</div>
				<div className="clearfix"></div>

				<div className="row">
					<ProjectsWidget title="Assigned Projects" size="col-md-12 col-lg-8" />
				</div>

				<div className="clearfix"></div>
			</div>
		);
	}
});

module.exports = Projects;
