angular.module('ShonosBlog', ['ui.bootstrap','ui.utils','ui.router','ngAnimate','toaster']);

angular.module('ShonosBlog').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('post', {
        url: 'post/:id',
        templateUrl: 'partial/post/post.html',
        controller; 'PostCtrl',
        controllerAs: 'ctrl'
    });
    $stateProvider.state('createPost', {
        url: '/createPost/',
        templateUrl: 'partial/createPost/createPost.html',
        controller; 'CreatePostCtrl',
        controllerAs: 'ctrl'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('ShonosBlog').run(function($rootScope) {

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
