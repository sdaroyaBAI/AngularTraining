
(function(){
	"use strict";
	angular.module('main').
	controller('CreatepostCtrl', createPostController);
	createPostController.$inject = ['$q', 'postService'];

	function createPostController($q,postService){
		this.post ={};
		this.$q = $q;
		this.postService = postService;
	}
	createPostController.prototype.save = function(){
		var post = {
			Title: "",
			Body: ""
		}
		this.postService.createPost(this.post);
	};

})();