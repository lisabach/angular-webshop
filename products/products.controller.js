(function () {
	'use strict';

	angular
		.module("Main.products", [])
		.controller("productsController", productsController);

	function productsController ($scope, productsService, cartService) { //cartService registreret i cart.Service.js fil, productsService indsættes fra products.Service fil
		
		$scope.categoriesSelected = new Array();

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


		$scope.categoryChange = function(category){
			var i = $scope.categoriesSelected.indexOf(category); //-1 for not checked
			if(i > -1){
				$scope.categoriesSelected.splice(i, 1); //fjern 
			}
			else{
				$scope.categoriesSelected.push(category);
			}
		}

		$scope.categoryFilter = function(product){
			if($scope.categoriesSelected.length > 0){
				if($scope.categoriesSelected.indexOf(product.category) < 0){
					return; //der skal ike returneres noget
				}
			}
			return product;
		}

		productsService.getProducts() //eftersprøger products fra productsService
			.then(modelProducts); //derefter modelProducts funktion

		productsService.getCategories() 
			.then(modelCategories);
	}

})(); 