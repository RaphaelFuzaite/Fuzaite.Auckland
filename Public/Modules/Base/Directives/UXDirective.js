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
})
.directive('ngUpdateHidden',function() {
    return function(scope, el, attr) {
        var model = attr['ngModel'];
        scope.$watch(model, function(nv) {
            el.val(nv);
        });

    };
});