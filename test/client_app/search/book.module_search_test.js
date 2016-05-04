describe('Books', function(){
  const searchToken  = 'Angular';
  const searchURL    = '/search/' + searchToken;
  const allBooks     = [{category: "javascript", books: ['Angular in action']},
                        {category: "css",        books: ['Css in action']}];
  const searchResult = [allBooks[0]];

  var $controller;
  var $backend;

  beforeEach(module('Decitre'));

  beforeEach(inject(function(_$controller_, _$httpBackend_){
    $controller  = _$controller_;
    $backend     = _$httpBackend_;

    $backend.whenGET('/category/books')
            .respond(allBooks);
    $backend.whenGET(searchURL)
            .respond(searchResult);
  }));

  describe('search', function(){
    var scope = {};
    var service;
    var controller;

    beforeEach(inject(function($injector){
      service    = $injector.get('SearchByTitle');
      controller = $controller('BindBooks',{$scope:        scope,
                                            SearchByTitle: serviceSpy});
    }));

    it('should bind all books when there is no token', function(){
      scope.search.token = '';
      scope.search.tokenChange();
      $backend.expectGET('/category/books');

      $backend.flush();

      expect(controller.elements).toEqual(allBooks);
    });

    it('should search for books by name afer each change', function(){
      var handle = jasmine.createSpy();
      $backend.expectGET(searchURL);

      service(searchToken, handle);
      $backend.flush();

      expect(handle).toHaveBeenCalledWith(searchResult);
    });

    it('should be empty initially', function(){
      expect(scope.search.token).toEqual('');
    });

    it('should be triggered with each token change', function(){
      httpRequestToken   = '';
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
  });
});