(function () {
	'use strict';

	var checkoutService = function ($http, $rootScope) {

		var saveOrder = function(order, orderlines){

			$http.post("/api/order/", {
				'firstname': order.firstname,
				'lastname': order.lastname,
				'address': order.address,
				'zip': order.zip,
				'city': order.city,
				'email': order.email,
				'orderlines': new Array(orderlines)
			})
			.success(function(response){
				console.log("ordrer oprettet");
				console.log(response);			
			})
			.error(function(response){
				console.log(response);
			});	
		}

		return {
			saveOrder: saveOrder
		}
	}

	angular
		.module("Main")
		.factory("checkoutService", checkoutService); //Service registreres
})(); 