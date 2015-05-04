(function() {
    'use strict';

    angular.module('myApp.directives')
        .directive('myDirective', ['MyService', myDirectiveFunction]);

    function myDirectiveFunction () {
        return {
            restrict: 'E',
            templateUrl: 'directives/myDirective.html',
            controllerAs: 'ctrl',
            controller: myDirectiveCtrl
        };
    }

    // inject the MyService service into the controller function
    myDirectiveCtrl.$inject = ['MyService'];

    function myDirectiveCtrl(MyService) {
        var me = this;

        me.init = function () {
            loadData();
            me.message = "welcome to your new directive";
        };

        function loadData() {
            MyService.loadAll()
                .then(function(data) {
                    me.data = data;
                }, function() {
                    me.message = 'Error: data failed to load';
                });
        }
    }
})();