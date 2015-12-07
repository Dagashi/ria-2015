var projectActions = require("./projects");
var taskActions = require("./tasks");
var authActions = require("./auth");

module.exports = Object.assign({},projectActions,taskActions,authActions);