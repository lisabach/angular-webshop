(function() {
	"use strict";

	angular
		.module("Main", [
			"ngRoute", //import ngRoute modulet
			"Main.products", //controller
			"Main.product",
			"Main.checkout", 
			"Main.cart",
			"Main.admin"
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
				.when("/checkout", {
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
				.when("/admin", {
					templateUrl: "./admin/admin.html",
					controller: "adminController"
				})
				.when("/admin/create", {
					templateUrl: "./admin/create-product.html",
					controller: "adminController"
				})
				.when("/admin/update/:id", {
					templateUrl: "./admin/update-product.html",
					controller: "adminController"
				})
				.when("/admin/show-orders", {
					templateUrl: "./admin/show-orders.html",
					controller: "adminController"
				})
				.otherwise({ redirectTo: "/" });
		})

}());