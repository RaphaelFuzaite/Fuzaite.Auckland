'use strict';

angular.module('Base').service('Messaging', [function () {
    
    var _messaging = {
        Itens: [],
        ResetQueue: function () {
            this.Itens = [{
                Class: '',
                Titulo: '',
                Texto: '',
                Duracao: 3
            }];
        },
        CompleteDisclaimer: function (statusCode, data) {
            switch (statusCode) {
                case 400:
                    this.Itens.push({
                        Class: this.MessagingClass.Warning,
                        Titulo: 'Solicitação inválida!',
                        Texto: data.message,
                        Duracao: 3
                    });
                    break;
                default:
                    this.ResetQueue();
                    break;
            }
        },
        GetDisclaimer: function () {
            return this.Itens;
        },
        DismissMessage: function (index) {
            this.Itens.splice(index, 1);
        },
        MessagingClass: {
            Error:      'negative',
            Warning:    'warning',
            Info:       'info',
            Success:    'success'
        }
    };
    
    return _messaging;
		
}]);