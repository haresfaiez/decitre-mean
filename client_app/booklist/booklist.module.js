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
       .controller('BindCategoryBooks', function(FetchBooks, $scope){
  var categories = this;
  function bind(books){
    categories.elements = books;
  };

  function bookSearch(){
    $scope.search.token = $scope.search.token + '...';
  }

  $scope.search = {};
  $scope.search.token = 'token';
  $scope.search.tokenChange = bookSearch;

  FetchBooks(bind);
});
