'use strict';

angular.module('Base').service('Messaging', ['$interval', function ($interval) {
    
    var ItemMessage = function (data) {
        var self = this;
        
        self.Class = _messaging.MessagingClass.Warning;
        self.Titulo = 'Solicitação inválida!';
        self.Texto = data.message;
        self.Duracao = 10;
        self.Visivel = true;
        self.Id = _messaging.Itens.length;
        self.Timer = function (item) {
            var timer = $interval(function() {
                --item.Duracao;
                if (item.Duracao < 1) {
                    $interval.cancel(timer);
                    item.Visivel = false;
                    //_messaging.DismissMessage(item.Id);
                }
            }, 1000);
        };
        self.Timer(self);
    };
    
    var _messaging = {
        Itens: [],
        ResetQueue: function () {
            this.Itens = [];
        },
        CompleteDisclaimer: function (statusCode, data) {
            switch (statusCode) {
                case 400:
                    this.Itens.push(new ItemMessage(data));
                    break;
                default:
                    this.ResetQueue();
                    break;
            }
        },
        GetDisclaimer: function () {
            if (this.Itens.every(function(t){ return t.Duracao < 1; })) {
                this.ResetQueue();
            }
            
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