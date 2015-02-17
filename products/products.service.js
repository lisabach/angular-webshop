(function () {
	'use strict'

	var productsService = function($http){

		var getProducts = function(){ //private function
			return $http.get("data/products.json") //få vist json data fra fil / http service returnerer en promise
			.then(function(response){ //når data er vist, skal funktionen response køres
				return response.data; //data fra response returneres 
			})

		}


		var getCategories = function(){
			return $http.get("data/categories.json") //få vist json data fra fil / http service returnerer en promise
			.then(function(response){ //når data er vist, skal funktionen response køres
				return response.data; //data fra response returneres 
			})
		}

		var getError = function(reason){
				//HVORDAN?????

		}

		return {
			getProducts: getProducts, //få vist produkter/gør det 'public'
			getCategories: getCategories
		}
	}



	angular
		.module("Main")
		.factory("productsService", productsService);
})(); 