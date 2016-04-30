describe('Books', function(){
  var $controller;

  beforeEach(angular.mock.module('Books'));

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('per category', function(){
                it('should be in an horizontal list', function(){
                     var fakeFetch = {books: ['Angular in action']};
                     var $scope = {};
                     var listBooks = $controller('BookPerCategory',
                                                 { $scope:   $scope,
                                                   FetchBooksForCategory: fakeFetch });

                     expect($scope.elements).toEqual(fakeFetch.books);
                });
           });
});