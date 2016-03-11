(function(){
    "use strict";

    angular.module('cgTraining')
    .factory('postService', postService);

    postService.$inject = ['$http', '$q'];

    function postService($http, $q){
        function getPost(id){
            var promise =  $http({
                url: "http://localhost:51715/posts/" + id,
                method: "GET"
            }).then(function(response){
                return response;
            }, function(errorResponse){
                console.log(errorResponse.status);
                console.log(errorResponse.data);
                return errorResponse;
            });
            return promise;
        }
        function deletePost(id){
            var promise =  $http({
                url: "http://localhost:51715/posts/" + id,
                method: "DELETE"
            }).then(function(response){
                return response;
            }, function(errorResponse){
                console.log(errorResponse.status);
                console.log(errorResponse.data);
                return errorResponse;
            });
            return promise;
        }
        function getAllPosts(){
            var promise =  $http({
                url: "http://localhost:51715/posts/",
                method: "GET"
            }).then(function(response){
                return response;
            }, function(errorResponse){
                console.log(errorResponse.status);
                console.log(errorResponse.data);
            });
            return promise;
        }

        function createPost(newPost){
            var promise =  $http({
                url: "http://localhost:51715/posts/",
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
                url: "http://localhost:51715/posts/" + post.Id,
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
        var service = {
            getPost : getPost,
            getAllPosts : getAllPosts,
            createPost : createPost,
            updatePost: updatePost,
            deletePost: deletePost
        };
        return service;
    }


})();
