// angular.module('cgTraining').controller('ProductsCtrl',function($scope){
//
//
// });

(function(){
    "use strict";
    angular.module('main')
            .controller('ProductsCtrl', productsController);


    productsController.$inject = ['$scope','$q','productsService']; //toaster

    function productsController($scope, $q,productsService){ //toaster
        //this.toaster = toaster;
        this.products = productsService.getAllProducts();
    }
    //productsController.prototype.save = function(newValue){
    //     this.toaster.success("Success", newValue + " has been saved");
    // };

})();
