describe('Books', function(){
  var fakeCategory = {elements: ['Angular in action']};
  var $controller;

  beforeEach(angular.mock.module('Books'));

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('per category', function(){
    it('in an horizontal list', function(){
      var $scope = {};
      var listBooks = $controller('HorizontalList', { $scope: $scope,
                                                      Category: fakeCategory });
      expect($scope.elements).toEqual(fakeCategory.elements);
    });
  });
});