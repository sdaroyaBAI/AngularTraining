(function () {
    'use strict';

    angular
        .module('app.product')
        .controller('ProductController', ProductController);

    /* @ngInject */
    function ProductController(logger) {
        var vm = this;
        vm.title = 'Product';

        activate();

        function activate() {
            logger.info('Activated Product View');
        }
    }
})();
