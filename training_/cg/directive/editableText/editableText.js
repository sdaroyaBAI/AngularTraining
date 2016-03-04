(function(){
	"use strict";

	angular.module('cgTraining')
		.directive('editableText', function() {
			return {
				restrict: 'E',
				scope: true,
				controller: editableTextController,
				controllerAs: 'ctrl',
				bindToController: {
					value:"=",
					onSave:"&"
				},
				templateUrl: 'directive/editableText/editableText.html',
				link: function(scope, element, attrs, fn) {

				}
			};
		});


	editableTextController.$inject = ['$scope'];
	function editableTextController($scope){
		//this.value = $scope.value;//bindToController
		this.save = function(newValue){
			if(this.value !== newValue){
				this.value = newValue;
				this.onSave({newValue:newValue});
			}
			this.$$editMe = false;
		}.bind(this);
		this.tempValue = '' + this.value;
		//this.onSave = $scope.onSave;//bindToController
	}

})();
