angular.module('Books', []);

angular.module('Books')
       .factory('categoryBooks', function($http){
  var result = function(categoryId, handle){
                  var target     = '/category/all';
                  var handleData = function(data, status, headers, config) {
                                       handle(data);
                                  };
                  $http.get(target).success(handleData);
                };
  return result;
});

angular.module('Books')
       .controller('BookPerCategory', function($scope,
                                               categoryBooks){
  categoryBooks(1, function(books){
    $scope.elements = books;
  });
});
