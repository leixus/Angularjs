'use strict';

angular.module('app').directive('appPositionClass',
    function() {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'view/template/positionClass.html',
            scope: {
                company: '=',
                isActive: '='
            },
            link: function($scope) {
                $scope.showPositionList = function (idx) {
                    $scope.isActive = idx;
                    // $scope.positionList = $scope.company.positionClass[idx].positionList
                    $scope.positionList = $scope.company.positionClass[idx].positionList
                };
                // 监听company的变化，当有变化是执行方法
                $scope.$watch('company', function(newVal) {
                    if(newVal) {
                        $scope.showPositionList(0);
                    }
                });
            }
        };
    }
);
