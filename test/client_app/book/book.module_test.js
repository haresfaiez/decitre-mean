describe('Book Details', function(){
  const angularBook = {_id: '0000', title: 'Angular 4'};

  var $controller;
  var $backend;

  beforeEach(module('Decitre'));

  beforeEach(inject(function(_$controller_,
                             _$httpBackend_,
                             $injector){
    $controller  = _$controller_;
    $backend     = _$httpBackend_;
  }));

  describe('fetch by by id', function(){
    it('should be binded to the view', function(){
      var bookURL = '/book/' + angularBook._id;
      $backend.whenGET(bookURL)
              .respond(angularBook);
      $backend.expectGET(bookURL);
      var controller  = $controller('BindBook',
                                    {$routeParams: {bookid: angularBook._id}});

      $backend.flush();

      expect(controller.details).toEqual(angularBook);
    });
  });
});