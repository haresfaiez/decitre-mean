angular.module('Decitre')
       .factory('FetchBooks', function($http){
  function result(handle){
    var target = '/category/books';
    function onHttpSuccess(response){
      handle(response);
    };

    $http.get(target)
         .success(onHttpSuccess);
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
