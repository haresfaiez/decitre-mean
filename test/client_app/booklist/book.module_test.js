describe('Books', function(){
  var $controller;
  var $httpBackend;
  var fetchBooksForCategory;
  var fakeFetch = {books: ['Angular in action']};

  beforeEach(module('Books'));

  beforeEach(inject(function(FetchBooksForCategory, _$httpBackend_) {
    fetchbooksforcategory = FetchBooksForCategory;
    $httpBackend = _$httpBackend_;
  }));

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('per category', function(){
                it('should fetch category of books from the service', function(){
                    $httpBackend.when('GET', '/category/all').respond(fakeFetch);
                    $httpBackend.expectGET('/category/all');
                    fetchbooksforcategory.fetch();
                    $httpBackend.flush();
                });

                it('should be in an horizontal list', function(){
                     var $scope = {};
                     var listBooks = $controller('BookPerCategory',
                                                 { $scope:   $scope,
                                                   FetchBooksForCategory: fakeFetch });

                    expect($scope.elements).toEqual(fakeFetch.books);
                });
           });
});