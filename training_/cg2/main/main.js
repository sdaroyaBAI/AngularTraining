angular.module('main', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('main').config(function($routeProvider) {

    $routeProvider.when('/home',{templateUrl: 'main/partial/home/home.html'});
    $routeProvider.when('/products/:id',{templateUrl: 'main/partial/products/products.html'});
    /* Add New Routes Above */

});

