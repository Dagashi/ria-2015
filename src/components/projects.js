var React = require("react");
var Router = require("react-router");
var ProjectsWidget = require("./projectswidget");

var Link = Router.Link;

var Home = React.createClass({
	render: function(){
		return (
			<div>
				<div className="page-title">
					<div className="title_left">
						<h3>
							Projects
						</h3>
					</div>

					<div className="title_right">
						<div className="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
							<div className="input-group">
								<input className="form-control" placeholder="Search for..." type="text" />

								<span className="input-group-btn">
									<button className="btn btn-default" type="button">Go!</button>
								</span>
							</div>
						</div>
					</div>
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

module.exports = Home;
