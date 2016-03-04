(function(){
    "use strict";

    angular.module('main')
    .controller('EditProductCtrl', editProductController);

    editProductController.$inject = ['$stateParams','productsService'];
    function editProductController( $stateParams,productsService){
         this.product = productsService.getProductById(parseInt($stateParams.id));
    }
})();
