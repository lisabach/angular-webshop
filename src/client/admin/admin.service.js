(function () {
	'use strict';

	var adminService = function ($http, $rootScope) {

		var createProduct = function(product){

			$http.post("/api/product/", {
				'id': product.id,
				'name': product.name,
				'size': product.size,
				'price': product.price,
				'category': product.category,
				'image': product.image,
				'description': product.description
			})
			.success(function(response){
				console.log("produkt oprettet")
				console.log(response)			
			})
			.error(function(response){
				console.log(response)
			});	
		}

		var updateProduct = function(id, product){

			$http.put("/api/product/" + id, {
				'id': product.id,
				'name': product.name,
				'size': product.size,
				'price': product.price,
				'category': product.category,
				'image': product.image,
				'description': product.description
			})
			.success(function(){
				console.log("opdateret")			
			});	

		}

		var deleteProduct = function(id){
			console.log(id)
			return $http.delete("/api/product/" + id)
				.then(function(response){
					return response;
				});

		}

		var getOrders = function(){ //private function
			return $http.get("/api/orders") //få vist json data fra fil / http service returnerer en promise
			.then(function(response){ //når data er vist, skal funktionen response køres
				return response.data; //data fra response returneres 
			})

		}

		return{
			createProduct: createProduct,
			updateProduct: updateProduct,
			deleteProduct: deleteProduct,
			getOrders: getOrders
		}
	}

	angular
		.module("Main")
		.factory("adminService", adminService); //adminService registreres
})(); 