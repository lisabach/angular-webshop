(function () {
	"use strict";

	angular
		.module("Main.checkout", [])
		.controller("checkoutController", checkoutController); 

	function checkoutController ($scope, $rootScope) {

		$scope.order = function () {
			
			var userInfo = {};
			var u = $scope.user;
			userInfo["firstname"] = u.firstname;
			userInfo["lastname"] = u.lastname;
			userInfo["address"] = u.address;
			userInfo["zip"] = u.zip;
			userInfo["city"] = u.city;
			userInfo["email"] = u.email;
			console.log($rootScope.cartProducts, userInfo);
		}
	}
			
})(); 