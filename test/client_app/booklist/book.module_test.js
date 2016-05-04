describe('Books', function(){
  var someCategories = [{category: "javascript", books: ['Angular in action']}];

  var $controller;
  var $backend;

  beforeEach(module('Decitre'));

  beforeEach(inject(function(_$controller_,
                             _$httpBackend_){
    $controller  = _$controller_;
    $backend     = _$httpBackend_;
  }));

  describe('from all categories', function(){
    it('should be fetched from the backend', function(){
      $backend.whenGET('/category/books')
              .respond(someCategories);
      $backend.expectGET('/category/books');
      var controller = $controller('BindCategoryBooks');

      $backend.flush();

      expect(controller.elements).toEqual(someCategories);
    });
  });
});