angular.module('Books', []);

angular.module('Books')
       .factory('FetchBooksForCategory', function($http){
  var result = {
                fetch: function(handle){
                  var target = '/category/all';
                  var promise = $http.get(target).
                    success(function(data, status, headers, config) {
                                  handle(data);
                                })}
               };
  return result;
});

angular.module('Books')
       .controller('BookPerCategory', function($scope,
                                               FetchBooksForCategory){
  FetchBooksForCategory.fetch(function(data){
    $scope.elements = data;
  });
});
