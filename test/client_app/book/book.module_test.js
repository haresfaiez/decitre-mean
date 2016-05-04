describe('Book Details', function(){
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

  describe('fetch by by id', function(){
    it('should be binded to the view', function(){
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