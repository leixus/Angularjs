"use strict";

angular.module("app").filter("filterByObj", [function() {
    // list传来的数组， obj筛选过滤出来的对象
    return function (list, obj) {
        var result = [];
        angular.forEach(list, function (item) {
            var isEqual = true;
            for (var e in obj) {
                if (item[e] !== obj[e]) {
                    isEqual = false;
                }
            }
            if (isEqual) {
                result.push(item);
            }
        });
        return result;
    }
}]);
