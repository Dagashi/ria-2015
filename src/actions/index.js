// Later on you'll likely have more files here. I like to have one file per action category.
// But for now there's just the one, so this index file might be rather unecessary.

var projectActions = require("./projects");

module.exports = Object.assign({},projectActions); // you'd add more action categories here later