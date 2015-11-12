var React = require('react');
var Router = require("react-router");
var Bootstrap = require('react-bootstrap');

var Link = Router.Link;
var Tooltip = Bootstrap.Tooltip;
var ProgressBar = Bootstrap.ProgressBar;

var ProjectRow = React.createClass({
	render: function(){
		return (
			<tr>
				<td>{this.props.projectId}</td>
				<td>
					<Link to={"/project/"+this.props.projectId}>{this.props.name}</Link>
					<br />
					<small>Created {this.props.created}</small>
				</td>
				<td>
					<ul className="list-inline">
						<li>
							<img src="images/anonymous_user_icon.jpg" className="avatar" alt="Avatar" />
						</li>
						<li>
							<img src="images/anonymous_user_icon.jpg" className="avatar" alt="Avatar" />
						</li>
					</ul>
				</td>
				<td className="project_progress">
					<div className="progress progress_sm">
						<ProgressBar bsStyle="success" now={this.props.progress} data-transitiongoal={this.props.progress} />
					</div>
					<small>{this.props.progress}% Complete</small>
				</td>
				<td>
					<a href={this.props.url} className="btn btn-primary btn-xs"><i className="fa fa-folder"></i> View </a>
				</td>
			</tr>
		);
	}
});

module.exports = ProjectRow;
