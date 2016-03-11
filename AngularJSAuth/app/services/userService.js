'use strict';
app.factory('userService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var userServiceFactory = {};

    var getUsers = function () {

        return $http.get(serviceBase + 'api/user').then(function (results) {
            return results;
        });
    };

    userServiceFactory.getUsers = getUsers;

    return userServiceFactory;

}]);