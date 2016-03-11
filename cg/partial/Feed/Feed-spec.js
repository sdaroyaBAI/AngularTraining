(function () {
    "use strict";

    describe('FeedCtrl', function () {

        beforeEach(module('cgTraining'));

        var scope, ctrl;
        /* MOCKED SERVICES*/
        var posts = [
			{
			    Title: 'something',
			    Id: 1,
			    Body: 'something'
			},
			{
			    Title: 'another thing',
			    Id: 2,
			    Body: 'another'
			}
        ];

        var authService = {
            checkAuth: function () {
                return true;
            }
        };
        var toaster = {
            warning: function () {
            },
            success: function () {

            }
        };

        /* END MOCKED SERVICES*/
        beforeEach(function () {

            module(function ($provide) {
                $provide.factory('postService', function ($q) {
                    var service = {
                        getAllPosts: function () {
                            var response = { data: { Content: posts }, status: 200 };
                            return $q.when(response);
                        },
                        deletePost: function (id) {
                            var response = {};
                            response.status = '200';
                            return $q.when(response);
                        }
                    };
                    return service;
                });
            });
        });
        beforeEach(inject(function ($rootScope, $controller, _postService_) {

            scope = $rootScope.$new();
            ctrl = $controller('FeedCtrl', {
                postService: _postService_,
                toaster: toaster,
                authService: authService
            });
        }));
        it('should be defined', inject(function () {
            expect(ctrl).toBeTruthy();
        }));
        describe('controller initialization', function () {

            it('should check if user is logged in', inject(function () {
                var spy = spyOn(authService, 'checkAuth');
                ctrl.init();
                expect(spy).toHaveBeenCalled();
            }));
            it('should get all posts', inject(function () {
                var spy = spyOn(ctrl, 'getAllPosts');
                ctrl.init();
                expect(spy).toHaveBeenCalled();
            }));
        });
        describe('getting posts', function () {
            var $q, $scope, deferred;
            beforeEach(inject(function (_$q_, _$rootScope_) {
                $q = _$q_;
                $scope = _$rootScope_.$new();
                deferred = $q.defer();
            }));
            it('should populate ctrl.posts', inject(function (_$q_, $rootScope) {
                var response = { data: { Content: posts }, status: '200' };
                var spy = spyOn(ctrl.postService, 'getAllPosts').and.returnValue(deferred.promise);
                deferred.resolve(response);
                ctrl.getAllPosts();
                $scope.$apply();
                expect(ctrl.posts).toBeTruthy();
                expect(spy).toHaveBeenCalled();
            }));
            it('should store the error status code on failure to retrieve posts', inject(function (_$q_, $rootScope) {
                //ARRANGE
                var response = { status: '404' };
                var spy = spyOn(ctrl.postService, 'getAllPosts').and.returnValue(deferred.promise);
                deferred.reject(response);
                //ACT
                ctrl.getAllPosts();
                $scope.$apply();

                //ASSERT
                expect(ctrl.$$error).toEqual('404');
                expect(spy).toHaveBeenCalled();
            }));
        });

        describe('deleting posts', function () {
            var $q, $scope, deferred;
            beforeEach(inject(function (_$q_, _$rootScope_) {
                $q = _$q_;
                $scope = _$rootScope_.$new();
                deferred = $q.defer();
            }));

            it('should delete a post', inject(function (_$q_, $rootScope) {
                //ARRANGE
                var deleteId = 1;
                var response = { dstatus: '200' };
                var deleteSpy = spyOn(ctrl.postService, 'deletePost').and.returnValue(deferred.promise);
                var getAllSpy = spyOn(ctrl, 'getAllPosts');
                var toasterSpy = spyOn(ctrl.toaster, 'success');
                deferred.resolve(response);
                //ACT
                ctrl.deletePost(deleteId);
                $scope.$apply();
                //ASSERT
                expect(deleteSpy).toHaveBeenCalled();
                expect(getAllSpy).toHaveBeenCalled();
                expect(toasterSpy).toHaveBeenCalled();
            }));

            it('should return an error message on failure', inject(function (_$q_, $rootScope) {
                //ARRANGE
                var deleteId = 1;
                var response = { dstatus: '400' };
                var deleteSpy = spyOn(ctrl.postService, 'deletePost').and.returnValue(deferred.promise);
                var toasterSpy = spyOn(ctrl.toaster, 'warning');
                deferred.reject(response);
                //ACT
                ctrl.deletePost(deleteId);
                $scope.$apply();
                //ASSERT
                expect(deleteSpy).toHaveBeenCalled();
                expect(toasterSpy).toHaveBeenCalled();
            }));
        });
    });
})();
