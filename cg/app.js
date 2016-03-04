angular.module('cTraining', ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngAnimate', 'main']);

angular.module('cTraining').config(function($routeProvider) {

    $routeProvider.when('/home',{templateUrl:'main/partial/home/home.html'});
    $routeProvider.when('/products/:id',{templateUrl:'main/partial/products/products.html'});
    /* Add New Routes Above */
    

});

angular.module('cTraining').run(function($rootScope) {

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
//$routeProvider
    .whenAuthenticated('/scheduling/:id', {
        controller: {'$scope', #routeParams, function ($scope, $routeParams) {
            $scope.id = $routeParams.id;
        }],
        template: '<scheduling-table id="{{id}}"></scheduling-table>'
    });