var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productsSchema = new Schema({
	id: String,
	name: String,
	size: String,
	price: Number,
	category: String,
	image: String,
	description: String
});

var ProductModel = mongoose.model("Products", productsSchema);

module.exports = ProductModel;