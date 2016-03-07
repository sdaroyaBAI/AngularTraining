(function(){
  //"use strict";
  angular.module('cgTraining').
  controller('RegisterCtrl',registerController);

  registerController.$ineject = ['$q', 'registerService', '$stateParams', '$state','toaster'];

  function registerController($q,registerService,$stateParams,$state,toaster){
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
  registerController.prototype.save = function(){
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
