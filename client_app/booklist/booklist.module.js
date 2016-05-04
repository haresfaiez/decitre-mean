angular.module('Decitre')
       .factory('FetchAll', function($http){
  function result(handle){
    var target = '/category/books';
    function respond(response){
      handle(response);
    };

    $http.get(target)
         .success(respond);
  };
  return result;
});

angular.module('Decitre')
       .factory('SearchByTitle', function($http){
  function result(title, handle){
    var target = '/search/' + title;
    function respond(response){
      handle(response);
    };

    $http.get(target)
         .success(respond);
  };
  return result;
});

angular.module('Decitre')
       .controller('BindBooks', function(FetchAll, SearchByTitle, $scope){

  var categories = this;
  $scope.search  = {token:       '',
                    tokenChange: search};

  search();

  function search(){
    var input = $scope.search.token;
    fetch(input);
  }

  function fetch(token){
    if (token == '')
      FetchAll(bind);
    else
      SearchByTitle(token, bind);
  }

  function bind(response){
    categories.elements = response;
  };
});
