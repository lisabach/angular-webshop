var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ordersSchema = new Schema({
	firstname: String,
	lastname: String,
	address: String,
	zip: Number,
	city: String,
	email: String,
	orderlines: Array
});

var OrderModel = mongoose.model("Orders", ordersSchema);

module.exports = OrderModel;