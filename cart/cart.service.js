(function () {
	'use strict'

	var cartService = function ($rootScope) {
		
		// var setMessage = function (message) {
		// 	$rootScope.message = message
		// }

		// return {
		// 	setMessage: setMessage //send message til indkøbskurv
		// }

		var addProductToCart = function(product, quantity){
			$rootScope.cartProducts[product.name] = { //vi bruger product name som et id
				product: product,
				quantity: quantity
			}
		}

		return {
			addProductToCart: addProductToCart
		}
	}

	angular
		.module("Main")
		.factory("cartService", cartService); //cartService registreres
})(); 