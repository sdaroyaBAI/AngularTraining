(function(){
	angular.module('ShonosBlog')
		.factory('postService',postService);

		postService.$inject = ['$http', 'q'];

		function postService($http, $q){

			function getPost(id){
				var promise = $http({
					url: "http://localhost:9001/posts/" + id,
					method: "GET"
				}).then(function(response){
					return response;
				}, function(errorResponse){
					console.log(errorResponse.status);
					console.log(errorResponse.data);

				});
				return promise;
			}
			function deletePost(id){
				var promise = $http({
					url: "http://localhost:9001/posts/"+id,
					method: "DELETE"
				}).then(function(response){
					return response;
				}, function(errorResponse){
					console.log(errorResponse.status);
					console.log(errorResponse.data);
				});
				return promise;
			}
			function getAllPosts(){
				var promise = $http({
					url: "http://localhost:9001/posts/",
					method: "GET",
					withCredentials:true
				}).then(function(response){
					return response;
				}, function(errorResponse){
					console.log(errorResponse.status);
					console.log(errorResponse.data);
				});
				return promise;
			}

			function createPost(newPost){
				var promise = $http({
					url: "http://localhost:9001/posts/",
					method: "POST",
					data: newPost
				}).then(function(response){
					return response;
				}, function(errorResponse){
					console.log(errorResponse.status);
					console.log(errorResponse.data);
				});
				return promise;
			}
			function updatePost(post){
				var promise =  $http({
					url: "http://localhost:9001/posts/" + post.Id,
					method: "PUT",
					data: post
				}).then(function(response){
					return response;
				}, function(errorResponse){
					console.log(errorResponse.status);
					console.log(errorResponse.data);
				});
				return promise;
			}
			var service ={
				getPost: getPost,
				getAllPosts : getAllPost,
				createPost : createPost,
				updatePost: updatePost,
				deletePost: deletePost
			};
			return service;

			}

})();
