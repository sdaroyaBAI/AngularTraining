(function(){
    "use strict";
    angular.module('cgTraining')
        .controller('FeedCtrl', feedController);
    feedController.$inject = ['postService', 'toaster','authService'];


    function feedController(postService, toaster, authService){
        authService.checkAuth();
        this.postService = postService;
        this.toaster= toaster;
        this.getAllPosts();
    }
    feedController.prototype.getAllPosts = function(){
        this.postService.getAllPosts().then(function(response){
            this.posts = response.data.Content;
        }.bind(this));
    };
    feedController.prototype.getColor = function(item){
        var r = item.Id * 100;
        var g = item.Id * 50;
        var b = item.Id *2;
        return 'rgb('+r+','+g+','+b+')';
    };
    feedController.prototype.deletePost = function(id){
        this.postService.deletePost(id)
        .then(function(response){
            this.toaster.warning("Success", "Post has been deleted");
            this.getAllPosts();
        }.bind(this));

    };
})();
