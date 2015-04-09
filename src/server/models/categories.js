var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var categoriesSchema = new Schema({
	category: String
});

var CategoryModel = mongoose.model("Categories", categoriesSchema);

module.exports = CategoryModel;