(function() {
    'use strict';

    angular
        .module('app.products')
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
                    templateUrl: 'app/product/product.html',
                    controller: 'ProductController',
                    controllerAs: 'ctrl',
                    title: 'Products',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> Product'
                    }
                }
            }
        ];
    }
})();
