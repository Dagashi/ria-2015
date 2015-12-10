/*
This is the "sitemap" of our app! 
*/

var React = require('react'),
	ReactRouter = require('react-router'),
	Route = ReactRouter.Route,
	IndexRoute = ReactRouter.IndexRoute,
	Redirect = ReactRouter.Redirect,
	App = require('./components/app'),
	Start = require('./components/start'),
	Wrapper = require('./components/wrapper'),
	Login = require('./components/login'),
	Home = require('./components/home'),
	Projects = require('./components/projects'),
	Project = require('./components/project'),
	ProjectAdd = require('./components/projectadd'),
	ProjectEdit = require('./components/projectedit');

module.exports = (
	<Route path="/" component={App}>
		<IndexRoute component={Start}/>
		<Route path="/login/" component={Login} />

		<Route path="/dashboard/" component={Wrapper}>
			<IndexRoute component={Home}/>
			<Route path="/projects/">
				<IndexRoute component={Projects} />
				<Route path="/project/:id" component={Project} />
				<Route path="/project-new/" component={ProjectAdd} />
				<Route path="/project-edit/:id" component={ProjectEdit} />
			</Route>
		</Route>
		
	</Route>
);
