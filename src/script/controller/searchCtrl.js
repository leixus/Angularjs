"use strict";

angular.module('app').controller("searchCtrl", ["dict", "$http", "$scope",
        function (dict, $http, $scope) {
            $scope.name = "";

            $scope.search = function() {
                $http.get('data/positionList.json')
                        .success(function(resp){
                            $scope.infoList = resp;
                        });
            };

            $scope.search();
            $scope.sheet = {};

            $scope.tabList = [
                {
                    id: 'city',
                    name: '城市'
                },
                {
                    id: 'salary',
                    name: '薪水'
                },
                {
                    id: 'scale',
                    name: '公司规模'
                }
            ];

            $scope.tClick = function (id, name) {
                tabId = id;
                console.log(tabId);
                $scope.sheet.list = dict[id];
                $scope.sheet.visible = true;
            };
            var tabId = '';
            $scope.sClick = function (id, name) {
                console.log(id);
                if (id) {
                    angular.forEach($scope.tabList, function (item) {
                        if (item.id === tabId) {
                            item.name = name;
                        }
                    });
                } else {
                    angular.forEach($scope.tabList, function (item) {
                        if (item.id === tabId) {
                            switch (item.id) {
                                case 'city':
                                    item.name = '城市';
                                    break;
                                case 'salary':
                                    item.name = '薪水';
                                    break;
                                case 'scale':
                                    item.name = '公司规模';
                                    break;
                                default:
                            }
                        }
                    });
                }
            }

        }
    ]
);
