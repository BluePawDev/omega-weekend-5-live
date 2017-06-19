var myApp = angular.module('myApp', []);

myApp.controller('ListingsController', function(ListingsService) {
	console.log('NG is active');
	var vm = this;

	vm.getListings = function() {
		console.log('in controller getListings');
	}; // end getListings
}); // end controller
