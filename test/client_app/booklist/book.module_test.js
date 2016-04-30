describe('Books', function(){
  var $controller;
  var $httpBackend;
  var fakeFetch = {books: ['Angular in action', 'Getting MEAN']};

  beforeEach(module('Books'));

  beforeEach(inject(function(_$controller_, _$httpBackend_){
    $controller = _$controller_;
    $httpBackend = _$httpBackend_;
  }));

  describe('for one category', function(){
                it('should fetch books of a category', function(){
                    $httpBackend.when('GET', '/category/all').respond(fakeFetch);
                    $httpBackend.expectGET('/category/all');
                    var $scope = {};
                    var listBooks = $controller('BookPerCategory',
                                                {$scope: $scope});
                    $httpBackend.flush();

                    expect($scope.elements).toEqual(fakeFetch);
                });
           });
});