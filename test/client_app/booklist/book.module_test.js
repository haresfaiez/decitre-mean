describe('Books', function(){

  var $controller;
  var $backend;

  beforeEach(module('Decitre'));

  beforeEach(inject(function(_$controller_,
                             _$httpBackend_){
    $controller  = _$controller_;
    $backend     = _$httpBackend_;
  }));

  describe('search', function(){
    const searchResult = [{title: 'Angular in action'}];
    var $searchBooks;

    beforeEach(inject(function($injector){
      $searchBooks = $injector.get('SearchBooks');
    }));

    it('should fetch books by name with each change', function(){
      var searchToken = 'Angular';
      var searchURL = '/search/' + searchToken;
      $backend.whenGET(searchURL)
              .respond(searchResult);
      $backend.expectGET(searchURL);
      var handle = jasmine.createSpy();

      $searchBooks(searchToken, handle);
      $backend.flush();

      expect(handle).toHaveBeenCalledWith(searchResult);
    });
  });

  describe('from all categories', function(){
    const someCategories = [{category: "javascript", books: ['Angular in action']}];
    var $fetchBooks;

    beforeEach(inject(function($injector){
      $fetchBooks  = $injector.get('FetchBooks');
    }));

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
      var controller  = $controller('BindCategoryBooks', {$scope:{}, FetchBooks: fakeService});

      expect(controller.elements).toEqual(someCategories);
    });
  });
});