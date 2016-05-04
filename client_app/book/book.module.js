angular.module('Decitre')
       .factory('FetchBookById', function($http){
  var result = function(bookId, handle){
                 var target = '/book/' + bookId;
                 function handleResult(response) {
                   handle(response);
                 };
                 $http.get(target)
                      .success(handleResult);
                };
  return result;
});

angular.module('Decitre')
       .controller('BindBook', function($scope, $routeParams, FetchBookById){
  var book   = this;
  var bookId = $routeParams.bookid;
  var bind       = function(result){
                     book.details = result;
                   };
  FetchBookById(bookId, bind);
});
