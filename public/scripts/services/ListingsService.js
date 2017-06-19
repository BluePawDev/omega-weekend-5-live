myApp.service('ListingsService', function($http) {
	var sv = this;

	sv.retrieveListings = function() {
		console.log('in service retrieveListings');
	}; // end retrieveListings
}); // end ListingsService
