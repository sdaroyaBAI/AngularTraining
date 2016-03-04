
(function(){
    "use strict";

    angular.module('cgTraining').
    controller('CreatepostCtrl', createPostCotroller);
    createPostCotroller.$inject = ['$q', 'postService','$stateParams','$state','toaster'];

    function createPostCotroller($q,postService,$stateParams, $state,toaster){
         this.$state = $state;
         this.toaster = toaster;
         this.post = {};
         if($stateParams.id){
            postService.getPost($stateParams.id).then(function(response){
                this.post = response.data;
            }.bind(this));
         }
         this.$q = $q;
         this.postService = postService;
    }
    createPostCotroller.prototype.save = function(){
        var promise ={};
        if(this.post.Id){
            promise = this.postService.updatePost(this.post).then(function(){
                this.toaster.success("Success", "Successfuly Edited Post");
            }.bind(this));
        }
        else{
            promise = this.postService.createPost(this.post).then(function(response){
                this.$state.go("editPost",{id:response.data.Id});
                this.toaster.success("Success", "Successfuly Created Post");
            }.bind(this));
        }
    };

})();
