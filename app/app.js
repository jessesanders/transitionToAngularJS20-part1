(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('myApp', [
        'ngRoute',
        'myApp.directives',
        'myApp.services'
    ]);

    angular.module('myApp.directives', []);
    angular.module('myApp.services', []);
})();
