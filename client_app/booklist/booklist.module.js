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
       .factory('SearchBooks', function($http){
  function result(token, handle){
    var target = '/search/' + token;
    function onHttpSuccess(response){
      handle(response);
    };

    $http.get(target)
         .success(onHttpSuccess);
  };
  return result;
});

angular.module('Decitre')
       .controller('BindCategoryBooks', function(FetchBooks,
                                                 SearchBooks,
                                                 $scope){
  var categories = this;
  function bind(books){
    categories.elements = books;
  };

  function bookSearch(){
    var token = $scope.search.token;
    if (token == '')
      FetchBooks(bind);
    else
      SearchBooks(token, bind);
  }

  $scope.search = {};
  $scope.search.token = '';
  $scope.search.tokenChange = bookSearch;

  FetchBooks(bind);
});
