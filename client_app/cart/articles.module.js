angular.module('Decitre')
       .factory('FetchCartArticles', function($http){
  function result(handle){
    const articles = [{category: "javascript", books: ['Angular in action']},
                      {category: "css",        books: ['Css in action']}];
    handle(articles);
  }
  return result;
});

angular.module('Decitre')
       .controller('CartArticles', function(FetchCartArticles){
  var articles = this;

  FetchCartArticles(bind);

  function bind(result){
    articles.list = result;
  };
});
