(function() {
    angular
        .module('app.products')
        .controller('ProductController', productController);
    productController.$inject = ['logger'];
    /* @ngInject */
    function productController(logger)  {
        this.products = [
                {name:'product 1', id:1},
                {name:'product 2', id:2},
                {name:'product 3', id:3},
                {name:'product 4', id:4},
                {name:'product 5', id:5},
                {name:'product 6', id:6},
                {name:'product 7', id:7},
                {name:'product 8', id:8}
        ];
    }

})();
