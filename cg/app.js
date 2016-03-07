angular.module('cgTraining', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'test','toaster','ngMessages']);

angular.module('cgTraining').config(function($stateProvider, $urlRouterProvider,$httpProvider) {

    // $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:51715/';
    // $httpProvider.defaults.withCredentials = true;


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
        controllerAs: 'ctrl'
    });
    $stateProvider.state('feed', {
        url: '/feed',
        templateUrl: 'partial/Feed/Feed.html',
        controller: 'FeedCtrl',
        controllerAs: 'ctrl'
    });
    $stateProvider.state('post', {
        url: '/post/:id',
        templateUrl: 'partial/post/post.html',
        controller: 'PostCtrl',
        controllerAs: 'ctrl'
    });
    $stateProvider.state('createPost', {
        url: '/create-post',
        templateUrl: 'partial/createPost/createPost.html',
        controller: 'CreatepostCtrl',
        controllerAs: 'ctrl'
    });
    $stateProvider.state('editPost', {
        url: '/edit-post/:id',
        templateUrl: 'partial/createPost/createPost.html',
        controller: 'CreatepostCtrl',
        controllerAs: 'ctrl'
    });
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'partial/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'ctrl'
    });
    $stateProvider.state('registration', {
        url: '/register',
        templateUrl: 'partial/registration/registration.html',
        controller: 'RegistrationCtrl',
        controllerAs: 'ctrl'
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
