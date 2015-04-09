(function () {
	'use strict';

	angular
		.module("Main.products", [])
		.controller("productsController", productsController);

	function productsController ($scope, productsService, cartService) { //cartService registreret i cart.Service.js fil, productsService indsættes fra products.Service fil
		
		// $scope.categoriesSelected = new Array();

		var modelProducts = function(data){ 
			$scope.products = data; 
		}

		var modelCategories = function(data){ 
			$scope.categories = data; 
		}		

		// $scope.sendMessageToCart = function(){
		// 	var message = this.inputMessage
		// 	cartService.setMessage(message); //kalder setMessage fra cart.Service.js fil
		// }


		$scope.addToCart = function(product){
			var quantity = this.quantity;
			cartService.addProductToCart(product, quantity);
		}

		var updateCategoriesSelected = function(){
			$scope.categoriesSelected = productsService.getCategoriesSelected();
		}

		$scope.categoryChange = function(category){
			productsService.categoryChange(category);
			updateCategoriesSelected();
		}

		$scope.categoryFilter = function(product){
			return productsService.categoryFilter(product);
		}	
	

		productsService.getProducts() //eftersprøger products fra productsService
			.then(modelProducts); //derefter modelProducts funktion

		productsService.getCategories() 
			.then(modelCategories);
	}

})(); 