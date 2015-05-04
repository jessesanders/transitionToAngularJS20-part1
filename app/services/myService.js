(function() {
    angular.module('myApp.services')
        .factory('MyService', ['$http', '$q', function ($http, $q) {
            'use strict';

            return {
                loadAll: function() {
                    //return $http.get('api/my-service-data');
                    var deferred = $q.defer();

                    deferred.resolve([{name: 'item 1'}, {name: 'item 2'}]);

                    return deferred.promise;
                }
            };
        }]);
})();