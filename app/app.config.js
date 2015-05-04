(function() {
    'use strict';

    angular.module('myApp')
        .config(['$routeProvider', routeConfig]);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {

        $routeProvider
            .when('/view1', {
                templateUrl: 'view1/view1.html'
            })
            .when('/view2', {
                templateUrl: 'view2/view2.html'
            })
            .otherwise({redirectTo: '/view1'});
    }
})();
