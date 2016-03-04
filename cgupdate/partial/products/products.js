// angular.module('cgTraining').controller('ProductsCtrl',function($scope){
//
//
// });

(function(){
    "use strict";
    angular.module('cgTraining')
            .controller('ProductsCtrl', productsController);


    productsController.$inject = ['$scope','$q','toaster','productsService'];

    function productsController($scope, $q,toaster,productsService){
        this.toaster = toaster;
        this.products = productsService.getAllProducts();
    }
    productsController.prototype.save = function(newValue){
        this.toaster.success("Success", newValue + " has been saved");
    };

})();
