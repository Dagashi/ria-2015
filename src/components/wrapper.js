/*
This is our top-level component. Sub-components matching specific routes will be
contained in `this.props.children` and rendered out.
*/

var React = require('react');

var Sidebar = require("./sidebar");
var Topnav = require("./topnav");

var menuStyle = {
	display: 'none'
};

var Wrapper = React.createClass({
	render: function() {
		return (
			<div className="main_container">

				<Sidebar />

				<Topnav />

				<div className="right_col" role="main">
					<div>
						<div className="page-title">
							<div className="title_left">
								<h3>
									Hello World App <small>My first react app </small>
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

						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Wrapper;