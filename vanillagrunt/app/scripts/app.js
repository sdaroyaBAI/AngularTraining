'use strict';

/**
 * @ngdoc overview
 * @name vanillagruntApp
 * @description
 * # vanillagruntApp
 *
 * Main module of the application.
 */
angular
  .module('vanillagruntApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
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
