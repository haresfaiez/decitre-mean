describe('Book', function(){
  const angularBook    = {_id: '0000', title: 'Angular 4'};
  const angularBookURL = '/book/' + angularBook._id;

  var $controller;
  var $backend;

  beforeEach(module('Decitre'));

  beforeEach(inject(function(_$controller_,
                             _$httpBackend_){
    $controller  = _$controller_;
    $backend     = _$httpBackend_;
  }));

  describe('Controller', function(){
    it('should add a book to the cart', function(){
      var fetchFake = function(_, handle){handle(angularBook);};

      var cartFake = {};

      cartFake.store = jasmine.createSpy();

      var controller  = $controller('BindBook', {Cart:          cartFake,
                                                 FetchBookById: fetchFake});

      controller.addToCart();

      expect(cartFake.store).toHaveBeenCalledWith(angularBook);
    });

    it('should Fetch and bind hte details to the view', function(){
      $backend.whenGET(angularBookURL)
              .respond(angularBook);
      $backend.expectGET(angularBookURL);
      var controller  = $controller('BindBook',
                                    {$routeParams: {bookid: angularBook._id}});

      $backend.flush();

      expect(controller.details).toEqual(angularBook);
    });
  });
});