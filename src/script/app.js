'use strict';

angular.module('app', ['ui.router', 'ngCookies', 'ngAnimate']);

// run在所有路由加载前进行初始化，定义公共的变量和方法
// angular.module('app', ['ui.router']).run(['$rootScope', function() {
//     $rootScope.im = function() {
//         console.log('im');
//     }
// }]);

// 定义公共的变量和方法
// angular.module('app')
//     .value('dict', {})
//     .run(['$http',
//         function ($http) {
//             dict.name = '我们的世界';
//         }
//     ]
// );
