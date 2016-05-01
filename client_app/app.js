angular.module('Decitre', ['ngRoute']);


function config ($routeProvider) {
$routeProvider.when('/', {
                templateUrl : '/booklist/booklist.view.html',
                controller  : 'BindCategoryBooks',
                controllerAs: 'categories'
            }).when('/book/:bookid', {
                templateUrl : '/book/book.view.html',
                controller  : 'BindBook',
                controllerAs: 'book'
            }).otherwise({redirectTo: '/'});
};

angular.module('Decitre').config(['$routeProvider', config]);