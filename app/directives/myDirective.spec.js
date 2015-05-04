(function(){
    'use strict';

    describe('Directive: myDirective', function() {
        "use strict";

        var $compile,
            $q,
            $httpBackend,
            element,
            controller,
            $rootScope,
            myServiceMock;

        beforeEach(module('myApp'));

        beforeEach(module('myApp.directives', function($provide){
            $provide.decorator('MyService', function() {
                myServiceMock = myApp.mock.MyServiceMock($q);
                return myServiceMock;
            });
        }));

        beforeEach(inject(function($injector) {
            $q = $injector.get('$q');
            $compile = $injector.get('$compile');
            $rootScope = $injector.get('$rootScope');
            $httpBackend = $injector.get('$httpBackend');
        }));


        beforeEach(function() {
            var html = angular.element('<my-directive></my-directive>');

            $rootScope = $rootScope.$new();
            $httpBackend.whenGET('directives/myDirective.html').respond(200, '');
            element = $compile(html)($rootScope);

            // Processes all of the watchers of the current scope and its children
            $rootScope.$digest(element);

            // Flushes all pending requests using the trained responses, e.g., the directive template mocked load above
            $httpBackend.flush();

            // get the  controller and set it to a local variable
            controller = element.controller('myDirective');
        });

        describe('For: ctrl.loadData()', function() {
            describe('When: defer succeeds', function() {
                it('Should: set controller.data', function () {
                    controller.init();
                    $rootScope.$apply();
                    expect(controller.data[0].name).toEqual('item 1');
                });
            });

            describe('When: defer fails', function() {
                function failBlock() {
                    var deferred = $q.defer();
                    deferred.reject();
                    return deferred.promise;
                }

                it('Should: set failure to true', function () {
                    // set the loadAll function on myServiceMock to the failure deferred
                    myServiceMock.loadAll = failBlock;

                    // this should fail
                    controller.init();
                    $rootScope.$apply();

                    // expect that this code in the failure block was executed
                    expect(controller.message).toEqual('Error: data failed to load');
                });
            });
        });
    });
})();