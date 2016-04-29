describe('Books', function(){

 beforeEach(angular.mock.module('Books'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('per category', function(){
    it('in an horizontal list', function(){
      var $scope = {};
      var listBooks = $controller('HorizontalList', { $scope: $scope });
      expect($scope.elements).toEqual(['Angular in action']);
    });
  });
});