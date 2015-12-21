var projectActions = require("./projects");
var taskActions = require("./tasks");
var authActions = require("./auth");
var usersActions = require("./users");

module.exports = Object.assign({},projectActions,taskActions,authActions,usersActions);