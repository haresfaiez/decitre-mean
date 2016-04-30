describe('Books', function(){
  var fakeCategory = {books: ['Angular in action']};
  var $controller;

  beforeEach(angular.mock.module('Books'));

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('per category', function(){
                it('should be in an horizontal list', function(){
                     var $scope = {};
                     var listBooks = $controller('BookPerCategory',
                                                 { $scope:   $scope,
                                                   FetchBooksForCategory: fakeCategory });

                     expect($scope.elements).toEqual(fakeCategory.books);
                });
           });
});