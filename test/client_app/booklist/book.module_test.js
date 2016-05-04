describe('Books', function(){
  var someCategories = [{category: "javascript", books: ['Angular in action']}];

  var $controller;
  var $backend;
  var $fetchBooks;
  var $rootScope;

  beforeEach(module('Decitre'));

  beforeEach(inject(function(_$controller_,
                             _$httpBackend_,
                             $injector){
    $controller  = _$controller_;
    $backend     = _$httpBackend_;
    $fetchBooks  = $injector.get('FetchBooks');
  }));

  describe('from all categories', function(){
    it('should be fetched from the backend', function(){
      $backend.whenGET('/category/books')
              .respond(someCategories);
      $backend.expectGET('/category/books');
      var handle = jasmine.createSpy();

      $fetchBooks(handle)
      $backend.flush();

      expect(handle).toHaveBeenCalledWith(someCategories);
    });

    it('should be binded to the view', function(){
      var fakeService = function(handle){handle(someCategories);}
      var controller  = $controller('BindCategoryBooks', {FetchBooks: fakeService});

      expect(controller.elements).toEqual(someCategories);
    });
  });
});