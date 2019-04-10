'use strict';

angular.module('app').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'view/main.html',
                controller: 'mainCtrl'
            })
            .state('search', {
                url: '/search',
                templateUrl: 'view/search.html',
                controller: 'searchCtrl'
            })
            .state('me', {
                url: '/me',
                templateUrl: 'view/me.html',
                controller: 'meCtrl'
            });
        $urlRouterProvider.otherwise('main');
    }]);
