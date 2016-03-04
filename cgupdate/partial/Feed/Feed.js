(function(){
    "use strict";
    angular.module('cgTraining')
        .controller('FeedCtrl', feedController);
    feedController.$inject = ['postService', 'toaster'];


    function feedController(postService, toaster){
        this.postService = postService;
        this.toaster= toaster;
        this.getAllPosts();
    }
    feedController.prototype.getAllPosts = function(){
        this.postService.getAllPosts().then(function(response){
            this.posts = response.data.Content;
        }.bind(this));
    };
    feedController.prototype.deletePost = function(id){
        this.postService.deletePost(id)
        .then(function(response){
            this.toaster.warning("Success", "Post has been deleted");
            this.getAllPosts();
        }.bind(this));

    };
})();
