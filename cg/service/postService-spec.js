 
(function(){
    "use strict";
    describe('postService', function() {
        var $httpBackend, postService;
        beforeEach(module('cgTraining'));

        beforeEach(inject(function(_$httpBackend_, _postService_){
            $httpBackend =_$httpBackend_;
            postService = _postService_;
        }));

        afterEach(function(){
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
        it('should ...', inject(function() {
        }));

        describe('postService -> getPost', function() {
            var requestHandler, _hb;
            beforeEach(function(){
                requestHandler = $httpBackend.when('GET','http://localhost:51715/posts/1');
            });
            afterEach(function(){
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            });
            it('should return success response containing post', inject(function() {
                //ARRANGE
                var response = {};
                requestHandler.respond(200,{Title:"mock", Id:1, Body:"mock"});
                $httpBackend.expect('GET','http://localhost:51715/posts/1');
                //ACT
                var promise = postService.getPost(1);
                promise.then(function(resp){
                    response =  resp;
                });
                $httpBackend.flush();
                //ASSERT
                expect(response.status).toEqual(200);
                expect(response.data).toBeTruthy();

            }));
            it('should return log failed requests', inject(function() {
                //ARRANGE
                var response = {};
                requestHandler.respond(404,{});
                $httpBackend.expect('GET','http://localhost:51715/posts/1');
                var spyLog = spyOn(console,'log');
                //ACT
                var promise = postService.getPost(1);
                promise.then(function(resp){
                    response = resp;
                });
                $httpBackend.flush();

                //ASSERT
                expect(spyLog).toHaveBeenCalledWith(response.status);
                expect(spyLog).toHaveBeenCalledWith(response.data);
                expect(response.status).toEqual(404);
                expect(response.data).toBeTruthy();

            }));
        });

    });

})();
