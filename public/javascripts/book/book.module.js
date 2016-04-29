var module = angular.module('Books', []);

module.factory('Category', function(){
  var result = {
                elements: ['Angular in action']
               };
  return result;
});

module.controller('HorizontalList', function($scope, Category){
  $scope.elements = Category.elements;
});