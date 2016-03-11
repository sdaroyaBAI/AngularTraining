(function(){
	"use strict";
	function registerService($http, $q){
		function register(newAccount){
			var promise =  $http({
				url: "http://localhost:13522/api/account/register",
				method: "POST",
				data: newAccount
			}).then(function(response){
				return response;
			}, function(errorResponse){
				console.log(errorResponse.status);
				console.log(errorResponse.data);
			});
			return promise;
		}
		var service = {
			register : register
		};
		return service;
	}
	angular.module('dotadex')
		.factory('registerService', registerService);

		registerService.$inject = ['$http', '$q'];
})();
