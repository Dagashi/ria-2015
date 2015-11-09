var React = require('react');

var Activity = React.createClass({
	render: function(){
		return (
			<li>
				<div className="block">
					<div className="block_content">
						<h2 className="title">
							<a href={this.props.action} >{this.props.title}</a>
						</h2>
						<div className="byline">
							<span>{this.props.created}</span> by <a href="#">{this.props.by}</a>
						</div>
						<p className="excerpt">{this.props.children}<a href={this.props.action}>Read&nbsp;More</a>
						</p>
					</div>
				</div>
			</li>
		);
	}
});

module.exports = Activity;
