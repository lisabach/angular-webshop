var Orders = require('../../models/orders');

//API - CRUD
//Wrap metoderne i et objekt

var order = {
	create: function(req, res, next){
		// res.send(req.body);
		
		var order = new Orders(req.body);
		console.log( order);
		order.save(function(err, data){
			if(err) console.error(err);
			res.send(data);
		})

	},
	getAll: function(req, res, next){
		Orders.find(function(err, data){
			if(err) console.error;
			res.json(data);
		})
	}
}

//returnerer objekterne
module.exports = order;