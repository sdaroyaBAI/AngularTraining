
(function(){
    "use strict";
    angular.module('cgTraining').controller('PostCtrl', postController);


    postController.$inject = ['$scope','$q','postService','$stateParams'];

    function postController($scope,$q,postService, $stateParams){
        postService.getPost(parseInt( $stateParams.id))
        .then(function(response){
            this.post = response.data;
        }.bind(this));
    }
})();
