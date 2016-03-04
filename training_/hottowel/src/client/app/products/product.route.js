(function() {
    'use strict';

    angular
        .module('app.product')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'product',
                config: {
                    url: '/product',
                    templateUrl: 'app/products/product.html',
                    controller: 'ProductController',
                    controllerAs: 'vm',
                    title: 'Product',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> Products'
                    }
                }
            }
        ];
    }
})();
