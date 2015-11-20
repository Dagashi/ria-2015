var React = require("react");

var Router = require("react-router");
var TopSearch = require("./topsearch.js");
var ProjectMessage = require("./projectmessage");
var ReactRedux = require("react-redux");
var actions = require("../actions/");
var TaskForm = require("./taskform");
var TasksWidget = require("./taskswidget");


var History = Router.History;
var Link = Router.Link;

var Project = React.createClass({
	mixins: [History] ,
	removeProject: function(e) {
		e.preventDefault();

		if (confirm("This will permanently remove this project from the database. Are you sure you want to do this?")) {
			this.props.deleteproject(this.props.params.id);
			this.history.pushState(null, "/projects/");
		}
	},
	render: function(){
		var project = this.props.projects[this.props.params.id];
		if (!project){
			return <div>Loading...</div>;
		}

		setTimeout(function(){ this.drawChart() }.bind(this), 1000);

		console.log(project);
		return (
			<div>
				<div className="page-title">
					<div className="title_left">
						<h3>
							Project Details
						</h3>
					</div>

					<TopSearch />
				</div>
				<div className="clearfix"></div>

				<div className="row">
					<div className="col-md-8">
						<div className="x_panel">
							<div className="x_title">
								<h2>{project.title}</h2>
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
											<span className="value text-success"> {project.deadline} </span>
										</li>
									</ul>
									<br />

									<div id="mainb" ref="chart" style={{height: 350+"px"}}></div>

									<div>
										<h4>Recent Activity</h4>
										<ul className="messages">
											<ProjectMessage heading="New design" date="11" month="Nov" >Raw denim you probably havent heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth.</ProjectMessage>
											<ProjectMessage heading="Client meeting agenda?" date="10" month="Nov" >Probably havent heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth.</ProjectMessage>
											<ProjectMessage heading="Uploaded project-requirements" date="30" month="Okt" file="Requirements.doc" path="#" >Raw denim you probably havent heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth.</ProjectMessage>
										</ul>
									</div>

								</div>

								<div className="col-md-3 col-sm-3 col-xs-12">
									<section className="panel project-details">
										<div className="x_title">
											<h2>Project Description</h2>
											<div className="clearfix"></div>
										</div>
										<div className="panel-body">
											<p>{project.description}</p>
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
												<a href="#" className="btn btn-sm btn-default"><i className="fa fa-folder"></i> Add files</a>
												<Link to={"/project-edit/"+this.props.params.id} className="btn btn-primary btn-sm"><i className="fa fa-pencil"></i> Edit </Link>
												<a href="#" onClick={ this.removeProject.bind(this) } className="btn btn-sm btn-danger"><i className="fa fa-times"></i> Delete project</a>
											</div>
										</div>

									</section>

								</div>

							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="x_panel">
							<div className="x_title">
								<h2>Tasks</h2>
								<div className="clearfix"></div>
							</div>

							<div className="x_content">
								<TasksWidget projectId={this.props.params.id} />
								<TaskForm projectId={this.props.params.id} callback={this.props.addNewTask.bind(this,this.props.params.id)} />
							</div>
						</div>
					</div>
				</div>

				<div className="clearfix"></div>
			</div>
		);
	},
	drawChart: function() {
		var node = this.refs.chart;
		console.log(node);
		var myChart9 = echarts.init(node, theme);
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
	}
});

// now we connect the component to the Redux store:

var mapStateToProps = function(appstate){
	// This component will have access to `appstate.projects` through `this.props.projects`
	return {projects:appstate.projects};
};

var mapDispatchToProps = function(dispatch){
	return {
		deleteproject: function(projectid){
			dispatch(actions.deleteProject(projectid));
		},
		addNewTask: function(projectid,title,deadline,desc){
			dispatch(actions.addNewTask(projectid,title,deadline,desc));
		}
	}
};

module.exports = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(Project);
