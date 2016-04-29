describe('book category', function(){

 beforeEach(angular.mock.module('bookCategory'));

  var $controller;

  beforeEach(inject(function(_$controller_){
               $controller = _$controller_;
             }));

  describe('list books', function(){
    it('should list books', function(){
    var $scope = {};
    expect(2).toEqual(2);
});
});
});