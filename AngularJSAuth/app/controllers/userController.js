'use strict';
app.controller('userController', ['$scope', 'userService', 'localStorageService', '$location', function ($scope, userService, localStorageService, $location) {

    var isAuthenticated = localStorageService.get('authorizationData');
    if (!isAuthenticated) {
        $location.path('/login')
    }

    $scope.users = [];

    userService.getUsers().then(function (results) {

        $scope.users = results.data;

    }, function (error) {
        alert(error.data.message);
    });

}]);