angular.module('Decitre')
       .factory('FetchBookById', function($http){
  function result (targetId, handle){
    var target = '/book/' + targetId;
    function respond(response){
      handle(response);
    };

    $http.get(target)
         .success(respond);
  };
  return result;
});

angular.module('Decitre')
       .controller('BindBook', function($routeParams,
                                        FetchBookById,
                                        Cart){
  var book     = this;
  var targetId = $routeParams.bookid;

  FetchBookById(targetId, bind);

  book.addToCart = function(){
    FetchBookById(targetId, Cart.store);
  }

  function bind(result){
    book.details = result;
  };
});
