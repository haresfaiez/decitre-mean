angular.module('Books', []);

angular.module('Books')
       .factory('FetchBooks', function($http){
  var result = function(categoryId, handle){
                 var target       = '/category/' + categoryId;
                 var handleResult = function(data, status, headers, config) {
                                      handle(data);
                                    };
                 $http.get(target).success(handleResult);
                };
  return result;
});

angular.module('Books')
       .controller('BindCategoryBooks', function($scope, FetchBooks){
  var categoryId = 1;
  var bind       = function(books){
                     $scope.elements = books;
                   };
  FetchBooks(categoryId, bind);
});
