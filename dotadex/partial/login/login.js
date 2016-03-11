(function(){
  //"use strict";


  angular.module('dotadex').
  controller('LoginCtrl',loginController);

  loginController.$inject = ['$q', 'loginService', '$stateParams', '$state','toaster'];

  function loginController($q,loginService,$stateParams,$state,toaster){
    this.$state = $state;
    this.account= {
    };
    if($stateParams.account){
      loginService.login($stateParams.account).then(function(response){
        this.account = response.data;
      }.bind(this));
    }
    this.$q = $q;
    this.loginService = loginService;
  }

  loginController.prototype.login = function(){
    var promise = {};
    if(this.account){
      promise = this.loginService.login(this.account).then(function(){
        this.toaster.success("Success", "account is logged in");
      }.bind(this));
    }
    else{
      promise = this.loginService.login(this.account).then(function(){
        this.toaster.warning("Failure", this.account.errorMessage);
      }.bind(this));
    }
  };
}
)();
