angular.module('main', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('main').config(function($stateProvider, $urlRouterProvider) {


    $stateProvider.state('products', {
        url: '/products',
        templateUrl: 'partial/products/products.html',
        controller: 'ProductsCtrl',
        controllerAs: 'ctrl',
    });

    
    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('main').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
