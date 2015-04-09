var Products = require('../../models/products');

//API - CRUD
//Wrap metoderne i et objekt

var product = {
	read: function(req, res, next){
		res.json({type: "Read", id: req.params.id});
	},
	create: function(req, res, next){
		// res.send(req.body);
		var product = new Products(req.body);
		product.save(function(err, product){
			if(err) console.error;
			res.send(product);
		})

	},
	update: function(req, res, next){
		// res.json({type: "Update", id: req.params.id, body: req.body});
		var id = req.params.id;
		Products.findByIdAndUpdate(id, {$set: req.body}, function(err, product){
			if(err) console.error;
			res.send(product);	
		})
	},
	delete: function(req, res, next){
		// res.json({type: "Delete", id: req.params.id});
		Products.findByIdAndRemove(req.params.id, function(err, data){
			if(err) console.error;
			res.json(data);	
		})
	},
	getAll: function(req, res, next){
		Products.find(function(err, data){
			if(err) console.error;
			res.json(data);
		})
	}
}

//returnerer objekterne
module.exports = product;