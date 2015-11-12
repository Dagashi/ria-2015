var React = require("react");
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var ProjectsWidget = require("./projectswidget");

var Home = React.createClass({
	mixins: [ReactFireMixin],
	componentWillMount: function() {
		var id = this.props.params.id;
		var ref = new Firebase("https://fiery-inferno-569.firebaseio.com/projects/"+id);
		this.bindAsObject(ref, "project");
	},
	componentDidMount: function() {
		var myChart9 = echarts.init(document.getElementById('mainb'), theme);
		myChart9.setOption({
			title: {
				x: 'center',
				y: 'top',
				padding: [0, 0, 20, 0],
				text: 'Project Reported time :: Revenue vs Input vs Time Spent',
				textStyle: {
					fontSize: 15,
					fontWeight: 'normal'
				}
			},
			tooltip: {
				trigger: 'axis'
			},
			toolbox: {
				show: true,
				feature: {
					dataView: {
						show: true,
						readOnly: false
					},
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			calculable: true,
			legend: {
				data: ['Revenue', 'Cash Input', 'Time Spent'],
				y: 'bottom'
			},
			xAxis: [
				{
					type: 'category',
					data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
			}
		],
			yAxis: [
				{
					type: 'value',
					name: 'Amount',
					axisLabel: {
						formatter: '{value} ml'
					}
			},
				{
					type: 'value',
					name: 'Hours',
					axisLabel: {
						formatter: '{value} °C'
					}
			}
		],
			series: [
				{
					name: 'Revenue',
					type: 'bar',
					data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
			},
				{
					name: 'Cash Input',
					type: 'bar',
					data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
			},
				{
					name: 'Time Spent',
					type: 'line',
					yAxisIndex: 1,
					data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
			}
		]
		});
	},
	getInitialState: function(){
		return {};
	},
	render: function(){
		if (!this.state.project){
			return <div>Loading...</div>;
		}
		console.log(this.state.project);
		return (
			<div>
				<div className="page-title">
					<div className="title_left">
						<h3>
							Project Details
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

				<div className="row">
					<div className="col-md-12">
						<div className="x_panel">
							<div className="x_title">
								<h2>{this.state.project.title}</h2>
								<div className="clearfix"></div>
							</div>

							<div className="x_content">

								<div className="col-md-9 col-sm-9 col-xs-12">

									<ul className="stats-overview">
										<li>
											<span className="name"> Estimated budget </span>
											<span className="value text-success"> 200 </span>
										</li>
										<li>
											<span className="name"> Total amount spent </span>
											<span className="value text-success"> 155 </span>
										</li>
										<li className="hidden-phone">
											<span className="name"> Deadline </span>
											<span className="value text-success"> {this.state.project.deadline} </span>
										</li>
									</ul>
									<br />

									<div id="mainb" style={{height: 350+"px"}}></div>

									<div>

										<h4>Recent Activity</h4>

										<ul className="messages">
											<li>
												<img src="images/img.jpg" className="avatar" alt="Avatar" />
												<div className="message_date">
													<h3 className="date text-info">24</h3>
													<p className="month">May</p>
												</div>
												<div className="message_wrapper">
													<h4 className="heading">Desmond Davison</h4>
													<blockquote className="message">Raw denim you probably havent heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth.</blockquote>
													<br />
													<p className="url">
														<span className="fs1 text-info" aria-hidden="true" data-icon=""></span>
														<a href="#"><i className="fa fa-paperclip"></i> User Acceptance Test.doc </a>
													</p>
												</div>
											</li>
											<li>
												<img src="images/img.jpg" className="avatar" alt="Avatar" />
												<div className="message_date">
													<h3 className="date text-error">21</h3>
													<p className="month">May</p>
												</div>
												<div className="message_wrapper">
													<h4 className="heading">Brian Michaels</h4>
													<blockquote className="message">Raw denim you probably havent heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth.</blockquote>
													<br />
													<p className="url">
														<span className="fs1" aria-hidden="true" data-icon=""></span>
														<a href="#" data-original-title="">Download</a>
													</p>
												</div>
											</li>
											<li>
												<img src="images/img.jpg" className="avatar" alt="Avatar" />
												<div className="message_date">
													<h3 className="date text-info">24</h3>
													<p className="month">May</p>
												</div>
												<div className="message_wrapper">
													<h4 className="heading">Desmond Davison</h4>
													<blockquote className="message">Raw denim you probably havent heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth.</blockquote>
													<br />
													<p className="url">
														<span className="fs1 text-info" aria-hidden="true" data-icon=""></span>
														<a href="#"><i className="fa fa-paperclip"></i> User Acceptance Test.doc </a>
													</p>
												</div>
											</li>
										</ul>


									</div>


								</div>

								<div className="col-md-3 col-sm-3 col-xs-12">

									<section className="panel">

										<div className="x_title">
											<h2>Project Description</h2>
											<div className="clearfix"></div>
										</div>
										<div className="panel-body">
											<h3 className="green"><i className="fa fa-paint-brush"></i> Gentelella</h3>

											<p>{this.state.project.description}</p>
											<br />

											<div className="project_detail">

												<p className="title">Client Company</p>
												<p>Fake company Inc</p>
												<p className="title">Project Leader</p>
												<p>David Strömbom</p>
											</div>

											<br />
											<h5>Project files</h5>
											<ul className="list-unstyled project_files">
												<li><a href=""><i className="fa fa-file-word-o"></i> Functional-requirements.docx</a>
												</li>
												<li><a href=""><i className="fa fa-file-pdf-o"></i> UAT.pdf</a>
												</li>
												<li><a href=""><i className="fa fa-mail-forward"></i> Email-from-flatbal.mln</a>
												</li>
												<li><a href=""><i className="fa fa-picture-o"></i> Logo.png</a>
												</li>
												<li><a href=""><i className="fa fa-file-word-o"></i> Contract-10_12_2014.docx</a>
												</li>
											</ul>
											<br />

											<div className="text-center mtop20">
												<a href="#" className="btn btn-sm btn-primary">Add files</a>
												<a href="#" className="btn btn-sm btn-warning">Report contact</a>
											</div>
										</div>

									</section>

								</div>

							</div>
						</div>
					</div>
				</div>

				<div className="clearfix"></div>
			</div>
		);
	}
});

module.exports = Home;
