exports.index = function(req, res){
	//200 ok
	res.send(200);
};

exports.products = function(req, res){
	var ProductsModel = require("../models/products");
	ProductsModel.find(function(err, data){
		if(err) console.error;
		res.json(data);
	})
}