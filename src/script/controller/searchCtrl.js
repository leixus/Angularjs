"use strict";

angular.module('app').controller("searchCtrl", ["$http", "$scope",
        function ($http, $scope) {
            $http.get('data/positionList.json')
                    .success(function(resp){
                        $scope.list = resp;
                    });
            $scope.sheet = {
                'list': [
                    {
                        name: '不限'
                    },
                    {
                        name: '少于50人'
                    },
                    {
                        name: '少于50人'
                    },
                    {
                        name: '50~100人'
                    },
                    {
                        name: '100~500人'
                    },
                    {
                        name: '500人以上'
                    }
                ]
            };

        }
    ]
);
