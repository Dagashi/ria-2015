/*
This is the "sitemap" of our app! 
*/

var React = require('react'),
	ReactRouter = require('react-router'),
	Route = ReactRouter.Route,
	IndexRoute = ReactRouter.IndexRoute,
	Wrapper = require('./components/wrapper'),
	Home = require('./components/home');
	Projects = require('./components/projects'),
	Project = require('./components/project'),
	ProjectAdd = require('./components/projectadd');
	ProjectEdit = require('./components/projectedit');

module.exports = (
	<Route path="/" component={Wrapper}>
		<IndexRoute component={Home} />
		<Route path="/projects/">
			<IndexRoute component={Projects} />
			<Route path="/project/:id" component={Project} />
			<Route path="/project-new/" component={ProjectAdd} />
			<Route path="/project-edit/:id" component={ProjectEdit} />
		</Route>
		
	</Route>
);
