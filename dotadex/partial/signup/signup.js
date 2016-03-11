(function(){
  //"use strict";


  angular.module('dotadex').
  controller('SignupCtrl',signupController);

  signupController.$inject = ['$q', 'registerService', '$stateParams', '$state','toaster'];

  function signupController($q,registerService,$stateParams,$state,toaster){
    this.$state = $state;
    this.toaster = toaster;
    this.newAccount = {
    };
    if($stateParams.newAccount){
      registerService.registerAccount($stateParams.newAccount).then(function(response){
        this.newAccount = response.data;
      }.bind(this));
    }
    this.$q = $q;
    this.registerService = registerService;
  }

  signupController.prototype.save = function(){
    var promise = {};
    if(this.newAccount){
      promise = this.registerService.register(this.newAccount).then(function(){
        this.toaster.success("Success", "Account registration successful");
      }.bind(this));
    }
    else{
      promise = this.registrationService.register(this.newAccount).then(function(){
        this.toaster.warning("Failure", this.account.errorMessage);
      }.bind(this));
    }
  };
}
)();
