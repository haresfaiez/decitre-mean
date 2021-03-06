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
    templateUrl: '/cart/articles.view.html',
    controller: 'BindCartArticles',
    controllerAs: 'articles'
 }).when('/login', {
    templateUrl: '/authentication/login.view.html'
 }).when('/register', {
    templateUrl: '/authentication/register.view.html'
 }).otherwise({redirectTo: '/'});
};

angular.module('Decitre').config(['$routeProvider', config]);