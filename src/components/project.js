var React = require("react");
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var ProjectsWidget = require("./projectswidget");

var Home = React.createClass({
	mixins: [ReactFireMixin],
	componentWillMount: function() {
		var id = this.props.params.id;
		var ref = new Firebase("https://fiery-inferno-569.firebaseio.com/projects/"+id);
		this.bindAsObject(ref, "project");
	},
	getInitialState: function(){
		return {};
	},
	render: function(){
		if (!this.state.project){
			return <div>Loading...</div>;
		}
		console.log(this.state.project);
		return (
			<div>
				<div className="page-title">
					<div className="title_left">
						<h3>
							Project Details
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
					Project info here.
				</div>

				<div className="clearfix"></div>
			</div>
		);
	}
});

module.exports = Home;
