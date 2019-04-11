"use strict";

angular.module("app").directive("appCase",
    function () {
        return {
            restrict: "A",
            replace: true,
            templateUrl: "../../view/template/case.html"
        }
    }
);
