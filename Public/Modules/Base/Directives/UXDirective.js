'use strict';

angular.module('Base').directive('uxNgEnter', function() {
		return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.uxNgEnter);
                });
                event.preventDefault();
            }
        });
    };   
});