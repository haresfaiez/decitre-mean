angular.module('Decitre')
       .factory('Cart', function(){
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
       .controller('BindCartArticles', function(Cart){
  var articles = this;

  Cart.articles(bind);

  function bind(result){
    articles.list = result;
  };
});
