var React = require("react"),
	ReactRedux = require("react-redux"),
	actions = require("../actions"),
	C = require("../constants"),
	Link = require("react-router").Link;

var Login = React.createClass({
	preventDefault: function(e) {
		e.preventDefault();
	},
	render: function(){
		var p = this.props;
		var auth = p.auth;
		var year = new Date().getFullYear();
		return (
			<div className="">
				<a className="hiddenanchor" id="toregister"></a>
				<a className="hiddenanchor" id="tologin"></a>

				<div id="wrapper">
					<div id="login" className="animate form">
						<section className="login_content">
							<form>
								<h1>Login</h1>
								<div>
									<input type="text" className="form-control" placeholder="Username" required="" />
								</div>
								<div>
									<input type="password" className="form-control" placeholder="Password" required="" />
								</div>
								<div className="login-actions">
									<a className="btn btn-default btn-lg submit pull-left" href="#">Log in</a>
									Or login using: 
									<a href="#/login/" onClick={p.attemptLogin} title="Login with a Github account"><i className="fa fa-github"></i></a>
									<a href="#/login/" onClick={this.preventDefault.bind(this)} title="Login with a Google account"><i className="fa fa-google"></i></a>
									<a href="#/login/" onClick={this.preventDefault.bind(this)} title="Login with a Facebook account"><i className="fa fa-facebook"></i></a>
								</div>
								<div className="clearfix"></div>

								<div className="separator">
									<p className="change_link">New to site?
										<a href="#toregister" onClick={ this.preventDefault.bind(this) } className="to_register"> Create Account </a>
									</p>
									<div className="clearfix"></div>
									<br />
									<div>
										<h1><i className="fa fa-sitemap"></i>  Project Kanri!</h1>

										<p>©{year} All Rights Reserved. Privacy and Terms</p>
									</div>
								</div>

								

							</form>
						</section>
					</div>
					<div id="register" className="animate form">
						<section className="login_content">
							<form>
								<h1>Create Account</h1>
								<div>
									<input type="text" className="form-control" placeholder="Username" required="" />
								</div>
								<div>
									<input type="email" className="form-control" placeholder="Email" required="" />
								</div>
								<div>
									<input type="password" className="form-control" placeholder="Password" required="" />
								</div>
								<div>
									<a className="btn btn-default submit" href="index.html">Submit</a>
								</div>
								<div className="clearfix"></div>
								<div className="separator">

									<p className="change_link">Already a member ?
										<a href="#tologin" className="to_register"> Log in </a>
									</p>
									<div className="clearfix"></div>
									<br />
									<div>
										<h1><i className="fa fa-paw"></i> Gentelella Alela!</h1>

										<p>©{year} All Rights Reserved. Gentelella Alela! is a Bootstrap 3 template. Privacy and Terms</p>
									</div>
								</div>
							</form>
						</section>
					</div>
				</div>
			</div>
		);
	}
});

// now we connect the component to the Redux store:
var mapStateToProps = function(appState){
	// This component will have access to `appState.auth` through `this.props.auth`
	return {auth:appState.auth};
};

var mapDispatchToProps = function(dispatch){
	return {
		attemptLogin: function(){ dispatch(actions.attemptLogin()); },
		logoutUser: function(){ dispatch(actions.logoutUser()); }
	}
};

module.exports = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(Login);
