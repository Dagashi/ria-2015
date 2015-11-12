var React = require('react');

var ProjectMessage = React.createClass({
	render: function(){
		var file = "";
		if (this.props.path && this.props.file) {
			var file = (
				<p className="url">
					<span className="fs1 text-info" aria-hidden="true" data-icon=""></span>
					<a href={this.props.path}><i className="fa fa-paperclip"></i> {this.props.file}</a>
				</p>
			);
		};

		return (
			<li>
				<img src="images/anonymous_user_icon.jpg" className="avatar" alt="Avatar" />
				<div className="message_date">
					<h3 className="date text-info">{this.props.date}</h3>
					<p className="month">{this.props.month}</p>
				</div>
				<div className="message_wrapper">
					<h4 className="heading">{this.props.heading}</h4>
					<blockquote className="message">{this.props.children}</blockquote>
					<br />
					{file}
				</div>
			</li>
		);
	}
});

module.exports = ProjectMessage;
