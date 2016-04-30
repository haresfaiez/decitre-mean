angular.module('Books', []);

angular.module('Books')
       .factory('FetchBooksForCategory', function($http){
  var result = function(handle){
                  var target     = '/category/all';
                  var handleData = function(data, status, headers, config) {
                                       handle(data);
                                  };
                  $http.get(target).success(handleData);
                };
  return result;
});

angular.module('Books')
       .controller('BookPerCategory', function($scope,
                                               FetchBooksForCategory){
  FetchBooksForCategory(function(books){
    $scope.elements = books;
  });
});
