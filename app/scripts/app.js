'use strict';

var app = angular.module('cloudBridgeApp', [ 'kendo.directives', "totvsTecMobile", "totvsButton" ]);

app.controller("appController", ["$scope", "totvsTecMobile", function($scope, totvsTecMobile){
    
    $scope.initialView = "views/home.html";    
    
    $scope.appOptions = { 
        skin: "office365"
    };
    
    
    $scope.runAdvplSuccess = function(retStr) {
        alert(retStr);
    }
    
    totvsTecMobile.connectWS( function() {
        // Carrega mensageria exclusiva da pagina
        dialog.advplToJs.connect(function (codeType, codeContent, objectName) {
            //if (codeType == "") {
            //}
        });

        // Envia sinal informando termino da carga
        dialog.jsToAdvpl("page_started", "Pagina inicializada");
    });
    
}]);

