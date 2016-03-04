'use strict';

/**
 * @ngdoc overview
 * @name vanillagulpApp
 * @description
 * # vanillagulpApp
 *
 * Main module of the application.
 */
angular
  .module('vanillagulpApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
