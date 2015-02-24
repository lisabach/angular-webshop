(function() {
	"use strict";

	angular
		.module("Main", [
			"ngRoute",
			"Main.products",
			"Main.product",
			"Main.checkout", 
			"Main.cart"
			]
		)

		.run(function($rootScope){
			// $rootScope.message = ""
			$rootScope.cartProducts = {};
			$rootScope.cartTotal = 0;
		})

		//URL routing
		.config(function($routeProvider){
			$routeProvider
				.when("/checkout/", {
					templateUrl: "./checkout/checkout.html",
					controller: "checkoutController"
				})
				.when("/product/:id", {
					templateUrl: "./products/product.html",
					controller: "productController"
				})
				.when("/", {
					templateUrl: "./products/products.html",
					controller: "productsController"
				})
				.otherwise({ redirectTo: "/" });
		})

}());