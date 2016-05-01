angular.module('Decitre', ['ngRoute']);


function config ($routeProvider) {
$routeProvider.when('/', {
        templateUrl : '/booklist/booklist.view.html',
        controller  : 'BindCategoryBooks',
        controllerAs: 'categories'
    }).otherwise({redirectTo: '/'});
};

angular.module('Decitre').config(['$routeProvider', config]);