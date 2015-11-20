var React = require('react');
var Router = require("react-router");
var Bootstrap = require('react-bootstrap');

var Link = Router.Link;
var Tooltip = Bootstrap.Tooltip;
var ProgressBar = Bootstrap.ProgressBar;

var Task = React.createClass({
	render: function(){
		console.log(this.props.task);
		//TODO: get user assigned to the task.
		var edited = "";
		if(this.props.task.edited) {
			edited = (<span><br /><small>Edited {this.props.task.edited}</small></span>);
		}
		return (
			<tr>
				<td>
					<input type="checkbox" />
				</td>
				<td>
					<ul className="list-inline">
						<li>
							<img src="images/anonymous_user_icon.jpg" className="avatar" alt="Avatar" />
						</li>
					</ul>
				</td>
				<td>
					<Link to={"/task/"+this.props.task[".key"]}>{this.props.task.title}</Link>
					<br />
					<small>Created {this.props.task.created}</small>
					{edited}
				</td>
				<td>
					<Link to={"/task/"+this.props.task[".key"]} className="btn btn-default btn-xs"><i className="fa fa-eye"></i></Link>
					<Link to={"/task-edit/"+this.props.task[".key"]} className="btn btn-default btn-xs"><i className="fa fa-pencil"></i></Link>
				</td>
			</tr>
		);
	}
});

module.exports = Task;
