var module = angular.module('Books', []);

module.factory('FetchBooksForCategory', function(){
  var result = {
                books: "Do some stuff here"
               };
  return result;
});

module.controller('BookPerCategory', function($scope,
                                              FetchBooksForCategory){
  $scope.elements = FetchBooksForCategory.books;
});