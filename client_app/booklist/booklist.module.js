angular.module('Decitre')
       .factory('FetchBooks', function($http){
  function result(handle){
    var target = '/category/books';
    function handleResult (response){
      handle(response);
    };

    $http.get(target)
         .success(handleResult);
  };
  return result;
});

angular.module('Decitre')
       .controller('BindCategoryBooks', function(FetchBooks){
  var categories = this;
  function bind(books){
    categories.elements = books;
  };

  FetchBooks(bind);
});
