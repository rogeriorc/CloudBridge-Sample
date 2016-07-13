app.controller("historyController", ["$scope", "totvsTecMobile", function($scope, totvsTecMobile){
    $scope.imgPath = "";
    
    $scope.tirarFoto = function() {
        console.log("tirar foto");
    }    
    $scope.barcode = "MYBARCODE";
    
    $scope.takePicture = function() {
        totvsTecMobile.getPicture(takePictureHandler);
    }
    
    $scope.takePictureSuccess = function(image) {
        image = image.replace("/sdcard/totvs", "");
        $scope.$apply(function(){$scope.imgPath = image;});
    }
}]);
