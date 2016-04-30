var module = angular.module('Books', []);

module.factory('FetchBooksForCategory', function($http){
  var result = {
                fetch: function(){
                  var target = '/category/all';
                  var promise = $http.get(target).then(function(response){
                                  return response.data;
                                });
                  return promise;
                },
                books: "Do some stuff here"
               };
  return result;
});

module.controller('BookPerCategory', function($scope,
                                              FetchBooksForCategory){
  $scope.elements = FetchBooksForCategory.books;
});