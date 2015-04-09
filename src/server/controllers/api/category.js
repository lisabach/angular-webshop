var Categories = require('../../models/categories');

//API - CRUD
//Wrap metoderne i et objekt

var category = {
	getAll: function(req, res, next){
		Categories.find(function(err, data){
			if(err) console.error;
			res.json(data);
		})
	}
}

//returnerer objekterne
module.exports = category;