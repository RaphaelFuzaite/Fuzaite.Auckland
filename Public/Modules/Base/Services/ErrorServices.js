'use strict';

angular.module('Base').service('Errors', [function () {
	
	this.Messaging = [];
    
    var ResetQueue = function () {
        this.Messaging = [{
            Type: '',
            Title: '',
            Text: ''
        }];
    };
	
    this.CompleteDisclaimer = function (statusCode, data) {
        switch (statusCode) {
            case 400:
            case 500:
                this.Messaging = {
                    Type: "alert-danger",
                    Title: "Erro no servidor",
                    Text: data.Message
                }
                break;
            default:
                ResetQueue();
                break;
        }
    };

    this.GetDisclaimer = function () {
        return this.Messaging;
    };
    
    ResetQueue();    
		
}]);