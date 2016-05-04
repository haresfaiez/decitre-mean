angular.module('Decitre')
       .factory('FetchBookById', function($http){
  function result (bookId, handle){
    var target = '/book/' + bookId;
    function onHttpSuccess(response){
      handle(response);
    };

    $http.get(target)
         .success(onHttpSuccess);
  };
  return result;
});

angular.module('Decitre')
       .controller('BindBook', function($routeParams,
                                        FetchBookById){
  var book   = this;
  var bookId = $routeParams.bookid;
  function bind(result){
    book.details = result;
  };

  FetchBookById(bookId, bind);
});
