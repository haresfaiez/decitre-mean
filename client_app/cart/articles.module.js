angular.module('Decitre')
       .factory('CartArticles', function(){
  var cart = {
    articles: []
  };

  function articles(handle){
    handle(cart.articles);
  }

  function store(article){
    cart.articles = cart.articles.concat([article]);
  }

  return {
    articles: articles,
    store:    store
  };
});

angular.module('Decitre')
       .controller('BindCartArticles', function(CartArticles){
  var articles = this;

  CartArticles.articles(bind);

  function bind(result){
    articles.list = result;
  };
});
