var React = require('react');

var Deadline = React.createClass({
	render: function(){
		return (
			<article className="media event">
				<div className="pull-left date">
					<p className="month">{this.props.month}</p>
					<p className="day">{this.props.day}</p>
				</div>
				<div className="media-body">
					<a className="title" href={this.props.action} >{this.props.title}</a>
					<p>{this.props.children}</p>
				</div>
			</article>
		);
	}
});

module.exports = Deadline;
