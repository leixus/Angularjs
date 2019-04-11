'use strict';

angular.module('app').controller('mainCtrl', ["$http", "$scope",
    function($http, $scope){
        $http.get('data/positionList.json')
            .success(function(resp){
                $scope.list = resp;
                // console.log(resp);
            });
        // $scope.list = [
        //     {
        //         id: 1,
        //         name: '销售',
        //         imgSrc: '../../image/company-1.png',
        //         companyName: '前度',
        //         city: '上海',
        //         industry: '互联网',
        //         time: '2019-04-08 15:30',
        //     },
        //     {
        //         id: 2,
        //         name: 'Web前端',
        //         imgSrc: '../../image/company-2.png',
        //         companyName: '前度',
        //         city: '上海',
        //         industry: '互联网',
        //         time: '2019-04-08 15:30',
        //     },
        //     {
        //         id: 3,
        //         name: 'Java工程师',
        //         imgSrc: '../../image/company-3.png',
        //         companyName: '前度',
        //         city: '上海',
        //         industry: '互联网',
        //         time: '2019-04-08 15:30',
        //     },
        //     {
        //         id: 4,
        //         name: '销售',
        //         imgSrc: '../../image/company-3.png',
        //         companyName: '前度',
        //         city: '上海',
        //         industry: '互联网',
        //         time: '2019-04-08 15:30',
        //     },
        //     {
        //         id: 5,
        //         name: 'Node工程师',
        //         imgSrc: '../../image/company-3.png',
        //         companyName: '前度',
        //         city: '上海',
        //         industry: '互联网',
        //         time: '2019-04-08 15:30',
        //     },
        //     {
        //         id: 5,
        //         name: 'Node工程师',
        //         imgSrc: '../../image/company-3.png',
        //         companyName: '前度',
        //         city: '上海',
        //         industry: '互联网',
        //         time: '2019-04-08 15:30',
        //     },
        //     {
        //         id: 6,
        //         name: 'Node工程师',
        //         imgSrc: '../../image/company-3.png',
        //         companyName: '前度',
        //         city: '上海',
        //         industry: '互联网',
        //         time: '2019-04-08 15:30',
        //     },
        //     {
        //         id: 7,
        //         name: 'Node工程师',
        //         imgSrc: '../../image/company-3.png',
        //         companyName: '前度',
        //         city: '上海',
        //         industry: '互联网',
        //         time: '2019-04-08 15:30',
        //     },
        //     {
        //         id: 8,
        //         name: 'Node工程师',
        //         imgSrc: '../../image/company-3.png',
        //         companyName: '前度',
        //         city: '上海',
        //         industry: '互联网',
        //         time: '2019-04-08 15:30',
        //     }
        // ];
        $scope.backTop = function () {
            // window.scrollTo(0,0);
            $("html,body").animate({scrollTop:0}, 300);
        }
    }
]);
