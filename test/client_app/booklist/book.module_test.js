describe('Books', function(){
  var $controller;
  var $httpBackend;
  var category = {books: ['Angular in action', 'Getting MEAN']};

  beforeEach(module('Books'));

  beforeEach(inject(function(_$controller_, _$httpBackend_){
    $controller  = _$controller_;
    $httpBackend = _$httpBackend_;
  }));

  describe('for one category', function(){
                it('should fetch books of a category', function(){
                    $httpBackend.when('GET', '/category/1').respond(category);
                    $httpBackend.expectGET('/category/1');
                    var $scope    = {};
                    var listBooks = $controller('BindCategoryBooks',
                                                {$scope: $scope});
                    $httpBackend.flush();

                    expect($scope.elements).toEqual(category);
                });
           });
});