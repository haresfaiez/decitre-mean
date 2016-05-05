angular.module('Decitre')
       .factory('CartArticles', function(){
  function articles(handle){
    var articles = [];
    handle(articles);
  }
  return {
    articles: articles
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
