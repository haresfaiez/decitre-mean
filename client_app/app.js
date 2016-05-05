angular.module('Decitre', ['ngRoute']);


function config ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl : '/booklist/booklist.view.html',
    controller  : 'BindBooks',
    controllerAs: 'categories'
  }).when('/book/:bookid', {
    templateUrl : '/book/book.view.html',
    controller  : 'BindBook',
    controllerAs: 'book'
  }).when('/cart', {
    templateUrl: '/cart/articles.view.htm',
    controller: 'BindCartArticles',
    controllerAs: 'articles'
 }).otherwise({redirectTo: '/'});
};

angular.module('Decitre').config(['$routeProvider', config]);