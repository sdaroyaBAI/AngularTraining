(function(){
	"use strict";
	angular.module('cgTraining')
	.factory('authService',authService);
	var globalsKey = "X-Session-store";
	authService.$inject = ['$http','$q','$window','$state'];

	function authService($http,$q,$window,$state){
		function checkAuth(){
			if($http.defaults.headers.common.Authorization){
				return true;
			}
	        var globals = $window.sessionStorage.getItem(globalsKey);
			if(globals){
				var credentials = JSON.parse(globals);
				$http.defaults.headers.common.Authorization = "Basic " + window.btoa(credentials.UserName+ ':' + credentials.Password);
				return true;
			}
			$state.go('login');
			return false;
		}

		function logout(){

			$http.defaults.headers.common.Authorization = null;
			$window.sessionStorage.removeItem(globalsKey);
			$state.go('login');

		}

		function login (credentials){
			return $http({
	           url: "http://localhost:51715/auth/basic/",
	           method: "GET",
			   headers: {
	              'Authorization': "Basic " + window.btoa(credentials.UserName+ ':' + credentials.Password)
	            },
	       }).then(function(response){
			   $http.defaults.headers.common.Authorization = "Basic " + window.btoa(credentials.UserName+ ':' + credentials.Password);
			   $window.sessionStorage.setItem(globalsKey, JSON.stringify(credentials));
	       },function(errorResponse){
	           $http.defaults.headers.common.Authorization = null;
			   $window.sessionStorage.removeItem(globalsKey);
			   return $q.reject("Login failed");
	       });
	   }
		var service = {
			login: login,
			checkAuth :checkAuth,
			logout : logout
		};
		return service;

	}
})();
