
(function () {
	'use strict';

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
				quantity: quantity,
				total: quantity * product.price
			}
			calcCartTotal(quantity * product.price)
		}

		var deleteProductFromCart = function(product) {
			var cartProduct = $rootScope.cartProducts[product.name];
			var cartProductTotal = cartProduct.product.price * cartProduct.quantity;
			calcCartTotal(cartProductTotal * -1);
			delete $rootScope.cartProducts[product.name];
		}

		var addToQuantity = function(product) {
			calcProductTotal(product, 1);
			calcCartTotal(product.price); //når der trykkes på +, køres funktionen calcCartTotal (amount sættes lig product.price)
		}

		var deleteFromQuantity = function(product) {
			if ($rootScope.cartProducts[product.name].quantity > 1) {
				calcProductTotal(product, -1);
				calcCartTotal(product.price * -1); //når der trykkes på -, skal funktionen calcCartTotal køres (amount(product.price) skal trækkes fra (-1))
			}
			else { console.log("ikke minus"); }
		}

		var calcProductTotal = function(product, quantity) {
			var cartProduct = $rootScope.cartProducts[product.name];
			cartProduct.quantity += quantity; //produkt antal skal pluses med parameter "quantity" (bruges ved addToQuantity (1), når der trykkes på plus (eller minus/deleteFromQuantity(-))) 
			cartProduct.total = cartProduct.quantity * cartProduct.product.price; //ny total
		}

		var calcCartTotal = function(amount) {
			$rootScope.cartTotal += amount; //beløbet skal pluses cartTotal fra app.module (som er sat til 0 fra start) 
		}

		return {
			addProductToCart: addProductToCart,
			deleteProductFromCart: deleteProductFromCart,
			addToQuantity: addToQuantity,
			deleteFromQuantity: deleteFromQuantity
		}
	}

	angular
		.module("Main")
		.factory("cartService", cartService); //cartService registreres
})(); 