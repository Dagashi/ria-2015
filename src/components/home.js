var React = require("react");
var TopSearch = require("./topsearch.js");
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

					<TopSearch />
				</div>
				<div className="clearfix"></div>

				<div className="row top_tiles">
					<TopStats icon="fa-comments-o" count="12" title="New Messages" tooltip="Go to Messages" actionGlyph="arrow-right" action="#" >From your co-workers.</TopStats>
					<TopStats icon="fa-bar-chart" count="7" title="Active Projects">Assigned to you.</TopStats>
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
