describe('Books', function(){
  var $controller;
  var $backend;

  beforeEach(module('Decitre'));

  beforeEach(inject(function(_$controller_, _$httpBackend_){
    $controller  = _$controller_;
    $backend     = _$httpBackend_;
  }));

  describe('search', function(){
    const searchResult = [{category: "javascript", books: ['Angular in action']}];
    const searchToken  = 'Angular';
    const searchURL    = '/search/' + searchToken;
    const allBooks     = [{category: "javascript", books: ['Angular in action']},
                          {category: "css", books: ['Css in action']}];


    var service;
    var scope = {};

    beforeEach(inject(function($injector){
      service = $injector.get('SearchBooks');
    }));

    it('should bind all books when there is no token', function(){
      $backend.whenGET('/category/books')
              .respond(allBooks);
      $backend.expectGET('/category/books');
      var controller  = $controller('BindCategoryBooks', {$scope: scope});
      scope.search.token = '';
      scope.search.tokenChange();

      $backend.flush();

      expect(controller.elements).toEqual(allBooks);
    });

    it('should search for books by name afer each change', function(){
      $backend.whenGET(searchURL)
              .respond(searchResult);
      $backend.expectGET(searchURL);
      var handle = jasmine.createSpy();

      service(searchToken, handle);
      $backend.flush();

      expect(handle).toHaveBeenCalledWith(searchResult);
    });

    it('should be empty initially', function(){
      var controller  = $controller('BindCategoryBooks',
                                    {$scope: scope, SearchBooks: serviceFake});

      expect(scope.search.token).toEqual('');
    });

    it('should be triggered with each token change', function(){
      httpRequestToken = '';
      var controller  = $controller('BindCategoryBooks',
                                    {$scope: scope, SearchBooks: serviceSpy});
      scope.search.token = searchToken;

      scope.search.tokenChange();

      expect(httpRequestToken).toEqual(searchToken);
      expect(controller.elements).toEqual(searchResult);
    });

    var httpRequestToken;
    function serviceSpy(token, handle){
      httpRequestToken = token;
      handle(searchResult);
    }
    function serviceFake(token, handle){
      handle(searchResult);
    }
    function fetchServiceFake(handle){
      handle(allBooks);
    }
  });
});