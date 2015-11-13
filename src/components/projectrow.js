var React = require('react');
var Router = require("react-router");
var Bootstrap = require('react-bootstrap');

var Link = Router.Link;
var Tooltip = Bootstrap.Tooltip;
var ProgressBar = Bootstrap.ProgressBar;

var ProjectRow = React.createClass({
	render: function(){
		//TODO: calculate progress by number of tasks done.
		//TODO: get all users assigned to the project.
		var edited = "";
		if(this.props.project.edited) {
			edited = (<span><br /><small>Edited {this.props.project.edited}</small></span>);
		}
		return (
			<tr>
				<td>
					<Link to={"/project/"+this.props.project[".key"]}>{this.props.project.title}</Link>
					<br />
					<small>Created {this.props.project.created}</small>
					{edited}
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
						<ProgressBar bsStyle="success" now="57" />
					</div>
					<small>57% Complete</small>
				</td>
				<td>
					<Link to={"/project/"+this.props.project[".key"]} className="btn btn-default btn-xs"><i className="fa fa-eye"></i></Link>
					<Link to={"/project-edit/"+this.props.project[".key"]} className="btn btn-default btn-xs"><i className="fa fa-pencil"></i></Link>
				</td>
			</tr>
		);
	}
});

module.exports = ProjectRow;
