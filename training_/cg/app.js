angular.module('cgTraining', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'test','toaster']);

angular.module('cgTraining').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'partial/home/home.html'
    });
    $stateProvider.state('products', {
        url: '/products',
        templateUrl: 'partial/products/products.html',
        controller: 'ProductsCtrl',
        controllerAs: 'ctrl',
    });
    $stateProvider.state('editProduct', {
        url: '/edit-product/:id',
        templateUrl: 'partial/edit-product/edit-product.html',
        controller: 'EditProductCtrl',
        controllerAs: 'ctrl',
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('cgTraining').run(function($rootScope) {

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
