app.controller("homeController", ["$scope", "$timeout", "totvsTecMobile", function($scope, $timeout, totvsTecMobile){
    var _scope = $scope;
    $scope.valor = 0;
    
    
    $scope.pullparam = function(a) {
        $scope.$apply(function(){$scope.valor++;});
    }
    
    $scope.showLoading = function() {
        console.log("showLoading");        
        
        /*kendo.mobile.application.changeLoadingMessage("Loading...");
        kendo.mobile.application.showLoading();        
        setTimeout(function(){
            kendo.mobile.application.hideLoading();
        }, 1000);*/
        
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        var strd = mm+"/"+dd+"/"+yyyy;
        
        totvsTecMobile.runAdvpl("DtoS(CtoD(\"" + strd + "\"))", superHandler);
    }
    
    $scope.superHandlerSc = function(meuarg) {
        alert(meuarg);
    }
}]);