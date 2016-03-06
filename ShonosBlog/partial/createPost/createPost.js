(function(){
  "use strict";

  angular.module('ShonosBlog').
  controller('CreatepostCtrl',createPostController);
  createPostController.$inject = ['$q', 'postService','$stateParams', $state, toaster];
  //state?
  function createPostController($q,postService,$stateParams, $state,toaster){
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
  createPostController.prototype.save = function(){
      var promise = {};
      if(this.post.Id){
        promise = this.postService.updatePost(this.post).then(function(){
          this.toaster.success("Success", "Succesfully Edited Post");
        }.bind(this)); //bind what
      }
      else{
        promise = this.postService.createPost(this.post).then(function(response){
          this.$state.go("editPost", {id:response.data.Id}); // response??
          this.toaster.success("Success", "Successfully Created Post");
        }.bind(this));
      }
  };
})();
