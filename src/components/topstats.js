
var React = require('react');
var Bootstrap = require('react-bootstrap');

var OverlayTrigger = Bootstrap.OverlayTrigger;
var Button = Bootstrap.Button;
var Glyphicon = Bootstrap.Glyphicon;
var Tooltip = Bootstrap.Tooltip;


var TopStats = React.createClass({
	render: function(){
		var tooltip = "";
		var action = "";
		if (this.props.action && this.props.tooltip) {
			var tooltip = (
				<Tooltip>{this.props.tooltip}</Tooltip>
			);
			var action = (
				<OverlayTrigger placement="top" overlay={tooltip}>
					<Button bsStyle="default" href={this.props.action} className="stats-action">
						<Glyphicon glyph={this.props.actionGlyph} />
					</Button>
				</OverlayTrigger>
			);
		};

		return (
			<div className="animated flipInY col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<div className="tile-stats">
					<div className="icon"><i className={"fa " + this.props.icon} ></i>
				</div>
				<div className="count">{this.props.count}</div>

					<h3>{this.props.title}</h3>
					<p>{this.props.children}</p>

					{action}
				</div>
			</div>
		);
	}
});

module.exports = TopStats;
