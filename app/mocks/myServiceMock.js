var myApp = myApp || {};
myApp.mock = myApp.mock || {};

(function(){
    'use strict';

    var data = [{name: 'item 1'}, {name: 'item 2'}];

    myApp.mock.MyServiceMock = function($q) {

        return {
            loadAll: function() {
                var deferred = $q.defer();
                deferred.resolve(data);
                return deferred.promise;
            }
        };
    };
})();