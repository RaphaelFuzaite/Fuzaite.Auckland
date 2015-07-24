'use strict';

angular.module('Base').service('Popup', [function () {
    
    var _popup = {
        Conteudo: '',
        Model: {},
        Element: {},
        SetPopupContent: function (data) {
            _popup.Conteudo  = data.Content;
            _popup.Model = data.Model;
            return _popup;
        },
        Then: function() {
            if (_popup.Model) {
                _popup.Element = $(ApplicationConfiguration.VendorsInitializer.Form.Validation(_popup.Model.GetRules()));
            }
        }
    };
    
    return _popup;
		
}]);