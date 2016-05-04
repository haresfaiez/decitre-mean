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
    const searchResult = [{category: "javascript", books: ['Angular in action']}];
    var $searchBooks;

    beforeEach(inject(function($injector){
      $searchBooks = $injector.get('SearchBooks');
    }));

    it('should search for books by name afer each change', function(){
      var searchToken = 'Angular';
      var searchURL   = '/search/' + searchToken;
      $backend.whenGET(searchURL)
              .respond(searchResult);
      $backend.expectGET(searchURL);
      var handle = jasmine.createSpy();

      $searchBooks(searchToken, handle);
      $backend.flush();

      expect(handle).toHaveBeenCalledWith(searchResult);
    });

    it('should be empty initially', function(){
      var fakeService = function(token, handle){handle(searchResult);}
      var scope = {};
      var controller  = $controller('BindCategoryBooks',
                                    {$scope: scope, SearchBooks: fakeService});

      expect(scope.search.token).toEqual('');
    });

    it('should be triggered with each token change', function(){
      function serviceSpy(token, handle){
        httpRequestToken = token;
        handle(searchResult);
      }
      var httpRequestToken = '';
      var scope = {};
      var controller  = $controller('BindCategoryBooks',
                                    {$scope: scope, SearchBooks: serviceSpy});
      var searchToken = 'Angular';
      scope.search.token = searchToken;
      scope.search.tokenChange();

      expect(httpRequestToken).toEqual(searchToken);
      expect(controller.elements).toEqual(searchResult);
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