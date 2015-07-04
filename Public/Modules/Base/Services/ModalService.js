'use strict';

angular.module('Base').service('Modal', [function () {
    
    function ClassDefinitions(key, hasIcon) {
        var classes = hasIcon ? 'labeled icon ' : '';
        switch (key) {
            case 'negativo':
                classes += 'red';
                break;
            case 'positivo':
                classes += 'teal';
                break;
            case 'neutro':
                classes += 'grey';
                break;
            case 'padrao':
                classes += 'blue';
                break;                
            default:
                break;
        }
        return classes;
    }
    
    function SizeDefinitions (key) {
        var size = '';
        switch (key) {
            case 'P':
                size = 'small';
                break;
            case 'G':
                size = 'large';
                break;
            case 'F':
                size = 'fullscreen';
                break;   
            default:
                break;
        }
        return size;
    }
    
    var _modal = {
        Titulo:      '',
        Conteudo:    '',
        Tamanho:     '',
        Acoes:       [],
        SetModal: function (data, actions) {
            _modal.Titulo    = data.Title;
            _modal.Conteudo  = data.Content;
            _modal.Tamanho     = SizeDefinitions(data.Size);
            _modal.Acoes  = _modal.BindAction(actions);
            return _modal;
        },
        BindAction: function (actions) {
            return actions.map(function (t,i) {
               return {
                   Classes: ClassDefinitions(t.Chave, t.Icone),
                   Icone:   t.Icone,
                   Texto:   t.Texto,
                   Click:   t.Click 
               };
            });
        }
    };
    
    return _modal;
		
}]);