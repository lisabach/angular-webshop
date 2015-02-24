(function () {
	'use strict';

	var checkoutService = function ($rootScope) {
		

	// 	var addProductToCart = function(product, quantity){
	// 		$rootScope.cartProducts[product.name] = { //vi bruger product name som et id
	// 			product: product,
	// 			quantity: quantity
	// 		}
	// 	}

	// 	return {
	// 		addProductToCart: addProductToCart
	// 	}
	}

	angular
		.module("Main")
		.factory("checkoutService", checkoutService); //Service registreres
})(); 