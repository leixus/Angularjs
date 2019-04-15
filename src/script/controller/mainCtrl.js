'use strict';

angular.module('app').controller('mainCtrl', ["$http", "$scope", "cache",
    function($http, $scope, cache){
        // cache.put('name', '2222');
        // console.log(cache.get('to'));
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
