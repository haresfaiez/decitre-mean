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

  it('should be binded in a list', function(){
    var serviceFake = function(handle){handle(articles);};
    var controller  = $controller('CartArticles',
                                  {FetchCartArticles: serviceFake});
    expect(controller.list).toEqual(articles);
  });
});
