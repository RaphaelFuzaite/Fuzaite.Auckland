'use strict';

angular.module('Base').filter('rawHtml', ['$sce', function ($sce) {
    
    return function (val) {
        return $sce.trustAsHtml(val);
    };
    
}]).filter('cut', function () {
    
    return function (value, wordwise, max, tail) {
        if (!value) return '';

        max = parseInt(max, 10);
        if (!max) return value;
        if (value.length <= max) return value;

        value = value.substr(0, max);
        if (wordwise) {
            var lastspace = value.lastIndexOf(' ');
            if (lastspace != -1) {
                value = value.substr(0, lastspace);
            }
        }

        return value + (tail || '…');
    };
    
}).filter('numberFixedLen', function () {
    
    return function (n, len) {
        var num = parseInt(n, 10);
        len = parseInt(len, 10);
        if (isNaN(num) || isNaN(len)) {
            return n;
        }
        num = '' + num;
        while (num.length < len) {
            num = '0' + num;
        }
        return num;
    };
    
}).filter('stripTags', function () {
    
    return function (val) {
        return angular.isString(val) ? val.replace(/(<([^>]+)>)/ig, ' ') : '';
    };
    
}).filter('capitalize', function () {
    
    return function (val) {
        return angular.isString(val) ? val.charAt(0).toUpperCase() + val.slice(1) : '';
    };
    
});