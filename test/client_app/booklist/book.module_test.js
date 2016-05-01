describe('Books', function(){
  var $controller;
  var $httpBackend;

  beforeEach(module('Decitre'));

  beforeEach(inject(function(_$controller_, _$httpBackend_){
    $controller  = _$controller_;
    $httpBackend = _$httpBackend_;
  }));

  describe('for all categories', function(){
                it('should be fetched from the backend', function(){
                    var categories = [{category: "javascript", books: ['Angular in action', 'Getting MEAN']}];
                    $httpBackend.when('GET', '/category/books').respond(categories);
                    $httpBackend.expectGET('/category/books');
                    var BindCategoryBooks = $controller('BindCategoryBooks', {$scope: {}});

                    $httpBackend.flush();

                    expect(BindCategoryBooks.elements).toEqual(categories);
                });
           });
});