var React = require("react");
var Router = require('react-router');
var TopSearch = require("./topsearch.js");
var ProjectForm = require("./projectform");
var ReactRedux = require("react-redux");

var actions = require("../actions/");

var History = Router.History;

var ProjectAdd = React.createClass({
	mixins: [History],
	render: function(){
		return (
			<div>
				<div className="page-title">
					<div className="title_left">
						<h3>Create new Project</h3>
					</div>

					<TopSearch />
				</div>
				<div className="clearfix"></div>

				<div className="row">
					<div className="col-md-6 col-xs-12">
						<div className="x_panel">
							<div className="x_title">
								<button className="btn btn-default btn-sm pull-left" onClick={this.history.goBack}><i className="fa fa-arrow-left"></i></button>
								<h2>New Project</h2>
								<div className="clearfix"></div>
							</div>
							<div className="x_content">
								<br />
								
								<ProjectForm callback={this.props.addnewproject} uid={this.props.auth.uid} users={this.props.users} />
								
							</div>
						</div>
					</div>
				</div>

				<div className="clearfix"></div>
			</div>
		);
	}
});


// now we connect the component to the Redux store:

var mapStateToProps = function(appstate){
	// This component will have access to `appstate.auth` through `this.props.auth`
	return {
		auth:appstate.auth,
		users: appstate.users
	};
};

var mapDispatchToProps = function(dispatch){
	return {
		addnewproject: function(uid,title,deadline,budget,desc){
			dispatch(actions.addNewProject(uid,title,deadline,budget,desc));
		}
	}
};

module.exports = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(ProjectAdd);
