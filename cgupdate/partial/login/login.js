
(function(){
    angular.module('cgTraining')
    .controller('LoginCtrl',loginController);

    loginController.$inject = ['$http', '$state'];
    function loginController($http,$state){
        this.$http = $http;
        this.$state = $state;
    }
    loginController.prototype.login = function(){ 
        this.$http({
           url: "http://localhost:51715/auth/credentials/",
           method: "POST",
           data:this.credentials
       }).then(function(response){
           this.$state.go("feed");
       }.bind(this));
    };
})();
