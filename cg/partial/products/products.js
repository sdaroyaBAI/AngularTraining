// angular.module('cgTraining').controller('ProductsCtrl',function($scope){
//
//
// });

(function(){
    "use strict";
    angular.module('cgTraining')
            .controller('ProductsCtrl', productsController);


    productsController.$inject = ['$scope','$q','toaster','productsService'];

    function productsController($scope, $q,toaster,productsService){
        this.toaster = toaster;
        this.products = productsService.getAllProducts();

        var deferred = $q.defer();

        deferred.promise.then(function(response){
            return $q.reject('SUCCESS');
        }, function(errorResponse){
            // return $q.reject('FAIL');
            return $http({
                url: "http://localhost:51715/posts/",
                method: "GET"
            });
        }).then(function(response){
            return response.status;
        },function(errorResponse){
            return JSON.stringify(errorResponse);
        }).then(function(response){
            toaster.success(response);
        },function(errorResponse){
            toaster.warning(errorResponse);
        });

        deferred.reject('');

    }
    productsController.prototype.save = function(newValue){
        this.toaster.success("Success", newValue + " has been saved");
    };

})();
