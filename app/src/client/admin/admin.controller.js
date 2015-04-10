(function () {
	"use strict";

	angular
		.module("Main.admin", [])
		.controller("adminController", adminController); 

	function adminController ($scope, adminService, productsService, $routeParams) {

		var modelProducts = function(data){ 
			$scope.products = data; 
		}

		var modelProduct = function(productArray){
			$scope.product = productArray[0];
			console.log("buh")
		}

		var modelOrders = function(data){
			$scope.orders = data;
		}

		$scope.createProduct = function (product) {
			// cartService.addToQuantity(product);
			console.log("create virker")
			var product = this.product;
			adminService.createProduct(product);
		}

		$scope.updateProduct = function (id) {
			// cartService.addToQuantity(product);
			console.log("virker virker virker")
			var product = this.product;
			adminService.updateProduct(id, product);
		}

		$scope.deleteProduct = function (id) {
			// cartService.deleteFromQuantity(product);
			console.log("hej")
			adminService.deleteProduct(id)
			.then(productsService.getProducts()
					.then(modelProducts))
		}	

		$scope.deleteOrder = function (id) {
			// cartService.deleteFromQuantity(product);
			console.log("order controller del")
			adminService.deleteOrder(id)
			.then(adminService.getOrders()
					.then(modelOrders))
		}	

		productsService.getProducts() //eftersprøger products fra productsService
		.then(modelProducts); //derefter modelProducts funktion

		productsService.getProduct($routeParams.id)
		.then(modelProduct);

		adminService.getOrders()
		.then(modelOrders);
				
	}
			
})(); 