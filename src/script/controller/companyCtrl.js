'use strict';

angular.module('app').controller('companyCtrl', ['$q', '$http', '$state', '$scope',
    function($q, $http, $state, $scope){
        $http.get("data/company.json?id=" + $state.params.id)
                .success(function(resp){
                    $scope.isActive = 0;
                    $scope.company = resp;
                });
    }
]);
