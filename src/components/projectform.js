var React = require("react");

var ProjectForm = React.createClass({
	render: function(){
		var project = this.props.project;
		console.log(project);
		if (!project){
			return <p>Loading! :)</p>;
		}
		return (
			<div>
				<div className="form-group">
					<label className="control-label col-md-3 col-sm-3 col-xs-12">Project title</label>
					<div className="col-md-9 col-sm-9 col-xs-12">
						<input type="text" ref="title" className="form-control" placeholder="Title" defaultValue={(project != null) ? project.title : "" } />
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-md-3 col-sm-3 col-xs-12">Project deadline</label>
					<div className="col-md-9 col-sm-9 col-xs-12">
						<input type="text" ref="deadline" className="form-control" placeholder="Deadline" defaultValue={(project != null) ? project.deadline : "" } />
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-md-3 col-sm-3 col-xs-12">Project description</label>
					<div className="col-md-9 col-sm-9 col-xs-12">
						<textarea className="form-control" ref="description" rows="3" placeholder="Description" defaultValue={(project != null) ? project.description : "" } ></textarea>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = ProjectForm;
