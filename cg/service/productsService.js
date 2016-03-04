(function(){
	"use strict";
	angular.module('cgTraining')
	.factory('productsService',productFactory);

	var products = [
			{name:'product 1', id:1},
			{name:'product 2', id:2},
			{name:'product 3', id:3},
			{name:'product 4', id:4},
			{name:'product 5', id:5},
			{name:'product 6', id:6},
			{name:'product 7', id:7},
			{name:'product 8', id:8}
	];
	function getAllProducts(){
		return products;
	}
	function getProductById(id){
		for(var i = 0; i<products.length; i++){
			if(products[i].id === id){
				return products[i];
			}
		}
		return null;
	} 


	/*inject*/
	function productFactory() {

		var productsService = {
			getAllProducts: getAllProducts,
			getProductById: getProductById
		};


		return productsService;
	}
})();
