(function(){
	"use strict";

	angular.module('main')
		.factory('postService', postService);

		postService.$inject = ['$http', '$q'];

		function postService($http, $q){
			function getPost(id){
				var promise =  $http({
					url: "http://localhost:51715/posts/" + id,
					method: "GET"
				});


				return promise;
			}
			function deletePost(id){
				var promise =  $http({
					url: "http://localhost:51715/posts/" + id,
					method: "DELETE"
				});


				return promise;
			}
			var service = {
				getPost : getPost,
				deletePost : deletePost
			};
			return service;
		}


})();
