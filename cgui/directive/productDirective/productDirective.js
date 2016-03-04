(function(){
	"use strict";

	angular.module('main')
		.directive('productDirective', function() {
			return {
				restrict: 'E',
				scope: {
					value:"=",
					onSave:"&"
				},
				controller: productDirectiveController,
				controllerAs: 'ctrl',
				bindToController: true,
				templateUrl: 'directive/productDirective/productDirective.html',
				link: function(scope, element, attrs, fn) {
				}
			};
		});


	productDirectiveController.$inject = ['$scope'];
	function productDirectiveController($scope){
		this.value = $scope.value;//bindToController
		this.save = function(newValue){
			if(this.value !== newValue){
				this.value = newValue;
				this.onSave({newValue:newValue});
			}
			this.$$editMe = false;
		}.bind(this);
		this.tempValue = '' + this.value;
		this.onSave = $scope.onSave;//bindToController
	}

})();
