angular.module('Books', []);

angular.module('Books')
       .factory('FetchBooks', function($http){
  var result = function(handle){
                 var target       = '/category/books';
                 var handleResult = function(data, status, headers, config) {
                                      handle(data);
                                    };
                 $http.get(target).success(handleResult);
                };
  return result;
});

angular.module('Books')
       .controller('BindCategoryBooks', function($scope, FetchBooks){
  var bind       = function(books){
                     $scope.elements = books;
                   };
  FetchBooks(bind);
});
