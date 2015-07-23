'use strict';

angular.module('Base').service('Popup', [function () {
    
    var _popup = {
        Conteudo: '',
        Model: {},
        SetPopupContent: function (data) {
            _popup.Conteudo  = data.Content;
            _popup.Model = data.Model;
            return _popup;
        },
        Then: function() {
            if (_popup.Model) {
                $(ApplicationConfiguration.VendorsInitializer.Form.Validation(_popup.Model.GetRules()));
            }
        }
    };
    
    return _popup;
		
}]);