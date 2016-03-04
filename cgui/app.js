angular.module('main', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('main').config(function($stateProvider, $urlRouterProvider) {


    $stateProvider.state('products', {
        url: '/products',
        templateUrl: 'partial/products/products.html',
        controller: 'ProductsCtrl',
        controllerAs: 'ctrl',
    });

    
    $stateProvider.state('Feed', {
        url: '/feed',
        templateUrl: 'partial/Feed/Feed.html'
    });
    $stateProvider.state('post', {
        url: '/post/:id',
        templateUrl: 'partial/post/post.html'
    });

    $stateProvider.state('createPost', {
        url: '/createPost',
        templateUrl: 'partial/createPost/createPost.html'
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
