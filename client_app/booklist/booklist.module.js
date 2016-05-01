angular.module('Decitre')
       .factory('FetchBooks', function($http){
  var result = function(handle){
                 var target       = '/category/books';
                 var handleResult = function(response) {
                                      handle(response);
                                    };
                 $http.get(target).success(handleResult);
                };
  return result;
});

angular.module('Decitre')
       .controller('BindCategoryBooks', function($scope, FetchBooks){
  var categories = this;
  var bind       = function(books){
                     categories.elements = books;
                   };
  FetchBooks(bind);
});
