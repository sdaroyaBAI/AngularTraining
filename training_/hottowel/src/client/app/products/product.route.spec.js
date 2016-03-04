/* jshint -W117, -W030 */
describe('admin routes', function () {
    describe('state', function () {
        var view = 'app/products/product.html';

        beforeEach(function() {
            module('app.product', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        it('should map state admin to url /product ', function() {
            expect($state.href('product', {})).to.equal('/product');
        });

        it('should map /product route to admin View template', function () {
            expect($state.get('product').templateUrl).to.equal(view);
        });

        it('of admin should work with $state.go', function () {
            $state.go('product');
            $rootScope.$apply();
            expect($state.is('product'));
        });
    });
});
