describe('Cart articles', function(){
  const articles = [{category: "javascript", books: ['Angular in action']},
                    {category: "css",        books: ['Css in action']}];

  var $controller;
  var $backend;

  beforeEach(module('Decitre'));

  beforeEach(inject(function(_$controller_,
                             _$httpBackend_){
               $controller  = _$controller_;
               $backend     = _$httpBackend_;
             }));

  describe('Service', function(){
    beforeEach(inject(function($injector){
                 service = $injector.get('Cart');
               }));

    it('should be initially empty', function(){
      var handle = jasmine.createSpy();

      service.articles(handle);

      expect(handle).toHaveBeenCalledWith([]);
    });

    it('should store articles', function(){
      var handle = jasmine.createSpy();
      service.store(articles[0]);
      service.store(articles[1]);

      service.articles(handle);

      expect(handle).toHaveBeenCalledWith(articles);
    });
  });

  describe('Controller', function(){
    it('should bind articles to the view', function(){
      var serviceFake = {};
      serviceFake.articles = function(handle){handle(articles);};

      var controller  = $controller('BindCartArticles',
                                    {Cart: serviceFake});

      expect(controller.list).toEqual(articles);
    });
  });
});
