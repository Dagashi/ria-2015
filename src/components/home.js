var React = require("react");
var TopStats = require("./topstats");
var ProjectsWidget = require("./projectswidget");
var ActivityWidget = require("./activitywidget");
var DeadlinesWidget = require("./deadlineswidget");

var Home = React.createClass({
	render: function(){
		return (
			<div>
				<div className="page-title">
					<div className="title_left">
						<h3>
							Dashboard
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

				<div className="row top_tiles">
					<TopStats icon="fa-comments-o" count="12" title="New Messages" tooltip="Go to Messages" actionGlyph="arrow-right" action="#" >From your co-workers.</TopStats>
					<TopStats icon="fa-bar-chart" count="7" title="Active Projects" tooltip="Add a new Project" actionGlyph="plus" action="#">Assigned to you.</TopStats>
					<TopStats icon="fa-sort-amount-desc" count="35" title="Tasks" tooltip="Add a new Task" actionGlyph="plus" action="#">Assigned to you.</TopStats>
					<TopStats icon="fa-exclamation-triangle" count="2" title="Urgent" tooltip="View issues" actionGlyph="arrow-right" action="#">Notifications or bug-tickets with urgent status.</TopStats>
				</div>

				<div className="row">
					<ProjectsWidget title="Recent Projects" size="col-md-6" />

					<ActivityWidget />

					<DeadlinesWidget />
				</div>

				<div className="clearfix"></div>
			</div>
		);
	}
});

module.exports = Home;
