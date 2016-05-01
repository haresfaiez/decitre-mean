angular.module('Decitre', ['ngRoute']);


function config ($routeProvider) {
$routeProvider.when('/', {
        templateUrl : '../booklist/booklist.view.html',
        controller  : 'BindCategoryBooks',
        controllerAs: 'vm'
    }).otherwise({redirectTo: '/'});
};

angular.module('Decitre').config(['$routeProvider', config]);