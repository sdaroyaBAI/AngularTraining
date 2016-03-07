(function(){
	"use strict";

	angular.module('cgTraining')
		.factory('registerService', registerService);

		registerService.$inject = ['$http', '$q'];

		function registerService($http, $q){
			function register(newAccount){
				var promise =  $http({
					url: "http://localhost:51715/register/",
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
})();
