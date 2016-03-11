describe('Homie Ctrl', function() {

	beforeEach(module('cgTraining'));

	var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('HomeCtrl', {$scope: scope});
    }));

	it('should ...', inject(function() {

		expect(ctrl).toBeTruthy();

	}));

});
