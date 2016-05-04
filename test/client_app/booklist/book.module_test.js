describe('Books', function(){
  const someCategories = [{category: "javascript", books: ['Angular in action']}];

  var $controller;
  var $backend;

  beforeEach(module('Decitre'));

  beforeEach(inject(function(_$controller_, _$httpBackend_){
    $controller  = _$controller_;
    $backend     = _$httpBackend_;
  }));

  describe('from all categories', function(){

    var service;

    beforeEach(inject(function($injector){
      service  = $injector.get('FetchAll');
    }));

    it('should be fetched from the backend', function(){
      $backend.whenGET('/category/books')
              .respond(someCategories);
      $backend.expectGET('/category/books');
      var handle = jasmine.createSpy();

      service(handle)
      $backend.flush();

      expect(handle).toHaveBeenCalledWith(someCategories);
    });

    it('should be binded to the view', function(){
      var controller  = $controller('BindBooks', {$scope:{}, FetchAll: fakeService});

      expect(controller.elements).toEqual(someCategories);
    });

    function fakeService(handle){
      handle(someCategories);
    }
  });
});