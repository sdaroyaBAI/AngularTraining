
(function(){
    angular.module('cgTraining')
    .controller('LoginCtrl',loginController);

    loginController.$inject = ['$http', '$state','toaster', 'authService'];
    function loginController($http,$state,toaster,authService){
        this.toaster = toaster;
        this.$http = $http;
        this.$state = $state;
        this.authService = authService;
    }
    loginController.prototype.login = function(){
        var self = this;
        this.authService.login(this.credentials)
        .then(function(response){
            self.$state.go('feed');
        }, function(errorResponse){
            self.toaster.warning("Error",errorResponse);
        });
    };
})();
