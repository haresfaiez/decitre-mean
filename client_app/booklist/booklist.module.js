angular.module('Books', []);

angular.module('Books')
       .factory('CategoryBooks', function($http){
  var result = function(categoryId, handle){
                 var target       = '/category/all';
                 var handleResult = function(data, status, headers, config) {
                                      handle(data);
                                    };
                 $http.get(target).success(handleResult);
                };
  return result;
});

angular.module('Books')
       .controller('BindCategoryBooks', function($scope, CategoryBooks){
  var bind = function(books){
               $scope.elements = books;
             };
  CategoryBooks(1, bind);
});
