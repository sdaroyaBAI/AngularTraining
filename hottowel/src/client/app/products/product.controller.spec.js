/* jshint -W117, -W030 */
describe('ProductController', function() {
    var controller;

    beforeEach(function() {
        bard.appModule('app.product');
        bard.inject('$controller', '$log', '$rootScope');
    });

    beforeEach(function () {
        controller = $controller('ProductController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Admin controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have title of Admin', function() {
                expect(controller.title).to.equal('Product');
            });

        });
    });
});
