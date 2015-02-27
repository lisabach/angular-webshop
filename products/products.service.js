(function () {
	'use strict';

	var productsService = function($http, $rootScope){

		var categoriesSelected = [];

		var getProducts = function(){ //private function
			return $http.get("data/products.json") //få vist json data fra fil / http service returnerer en promise
			.then(function(response){ //når data er vist, skal funktionen response køres
				return response.data; //data fra response returneres 
			}, getError)

		}

		var getProduct = function(id){
			return $http.get("data/products.json")
				.then(function(response){
					return findProductInArray(response.data, id);
				}, getError)
		}

		var findProductInArray = function(data, id){
			return data.filter(function(element){
				if(element.id === id){
					return element;
				}
			})
		}


		var getCategories = function(){
			return $http.get("data/categories.json") //få vist json data fra fil / http service returnerer en promise
			.then(function(response){ //når data er vist, skal funktionen response køres
				return response.data; //data fra response returneres 
			}, getError)
		}

		var getCategoriesSelected = function(){
			return getCategoriesSelected;
		}

		var categoryChange = function(category){
			var i = categoriesSelected.indexOf(category); //-1 for not checked
		 	if(i > -1){
		 		categoriesSelected.splice(i, 1); //fjern 
		 	}
		 	else{
		 		categoriesSelected.push(category);
		 	}
		}

		var categoryFilter = function(product){
			if(categoriesSelected.length > 0){

		 		if(categoriesSelected.indexOf(product.category) < 0){
		 			return; //der skal ike returneres noget
		 		}
		 	}
		 	return product;
		}

		var getError = function(reason){
				$rootScope.error = "error";

		}


		return {
			getProducts: getProducts, //få vist produkter/gør det 'public'
			getProduct: getProduct,
			getCategories: getCategories,
			getCategoriesSelected: getCategoriesSelected,
			categoryChange: categoryChange,
			categoryFilter: categoryFilter
		}
	}



	angular
		.module("Main")
		.factory("productsService", productsService);
})(); 