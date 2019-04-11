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
                };
            }
        };
    }
);
