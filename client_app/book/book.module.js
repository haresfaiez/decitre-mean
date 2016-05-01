angular.module('Decitre')
       .factory('FetchBookById', function($http){
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
       .controller('BindBook', function($scope, FetchBookById){
  var book = this;
  var bind       = function(result){
                     book.details = result;
                   };
  FetchBookById(bind);
});
