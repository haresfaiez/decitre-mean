describe('Books', function(){
  var $controller;
  var $httpBackend;
  var category = [{category: "javascript", books: ['Angular in action', 'Getting MEAN']}];

  beforeEach(module('Decitre'));

  beforeEach(inject(function(_$controller_, _$httpBackend_){
    $controller  = _$controller_;
    $httpBackend = _$httpBackend_;
  }));

  describe('for one category', function(){
                it('should fetch books of a category', function(){
                    $httpBackend.when('GET', '/category/books').respond(category);
                    $httpBackend.expectGET('/category/books');
                    var $scope    = {};
                    var listBooks = $controller('BindCategoryBooks',
                                                {$scope: $scope});
                    $httpBackend.flush();

                    expect($scope.elements).toEqual(category);
                });
           });
});