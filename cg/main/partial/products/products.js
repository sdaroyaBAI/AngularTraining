//angular.module('cgTraining').controller('ProductsCtrl',function($scope) {
//	
//});
//
(function(){
	"use strict";
	angular.module('cgTraining').controller('ProductsCtrl', productsController);

	productsController.$inject = ['$scope',
	'$q'];

	function productsController($scope,$q){

		this.products = [
		{name: 'product 1', id:1},
		{name: 'product 2', id:2},
		{name: 'product 3', id:3},
		{name: 'product 4', id:4},
		{name: 'product 5', id:5},
		{name: 'product 6', id:6},
		{name: 'product 7', id:7},
		];

	}
}) ();