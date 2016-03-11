angular.module('dotadex', ['ui.bootstrap','ui.utils','ui.router','ngAnimate','toaster']);

angular.module('dotadex').config(function($stateProvider, $urlRouterProvider,$httpProvider) {

    /* Add New States Above */
    $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'partial/home/home.html'
    });

    $stateProvider.state('signup', {
            url: '/signup',
            templateUrl: 'partial/signup/signup.html',
            controller: 'SignupCtrl',
            controllerAs: 'ctrl'
    });

    $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'partial/login/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'ctrl'
    });

    $urlRouterProvider.otherwise('/home');

});

angular.module('dotadex').run(function($rootScope) {

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
