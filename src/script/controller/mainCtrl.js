'use strict';

angular.module('app').controller('mainCtrl', ["$http", "$scope",
    function($http, $scope){
        $http.get('data/positionList.json')
            .success(function(resp){
                $scope.list = resp;
            });
        $scope.backTop = function () {
            // window.scrollTo(0,0);
            $("html,body").animate({scrollTop:0}, 300);
        }
    }
]);
