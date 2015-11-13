var React = require("react");

var TopSearch = React.createClass({
	render: function(){
		return (
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
		);
	}
});


module.exports = TopSearch;
