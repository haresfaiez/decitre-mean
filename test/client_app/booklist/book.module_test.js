describe('Books', function(){
  var $controller;
  var $backend;

  beforeEach(module('Decitre'));

  beforeEach(inject(function(_$controller_, _$httpBackend_){
    $controller  = _$controller_;
    $backend     = _$httpBackend_;
  }));

  describe('from all categories', function(){
    const someCategories = [{category: "javascript", books: ['Angular in action']}];

    var service;

    beforeEach(inject(function($injector){
      service  = $injector.get('FetchBooks');
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
      var fakeService = function(handle){handle(someCategories);}
      var controller  = $controller('BindCategoryBooks', {$scope:{}, FetchBooks: fakeService});

      expect(controller.elements).toEqual(someCategories);
    });
  });
});