app.factory('templates', function() {
    return {
        mobileTemplate: $("#mobileTemplate").html()
    };
});

app.controller("settingsController", ["$scope", 'templates', "totvsTecMobile", function($scope, templates, totvsTecMobile){
    $scope.templates = templates;
    
    if( $scope.selectedView == undefined ) {
        $scope.selectedView = 0;
    } else {
        $scope.selectedView = $scope.escolha.selectedIndex;   
    }
    
    $scope.btselect = function(e) {
        $scope.$apply(function(){$scope.selectedView = e.index;});   
    }
    
    $scope.list = [
        { month : "January"  , arrow : "sales-up"  , value : "$ 35,000" }, 
        { month : "February" , arrow : "sales-down", value : "$ 25,000" }, 
        { month : "March"    , arrow : "sales-down", value : "$ 23,000" }, 
        { month : "April"    , arrow : "sales-up"  , value : "$ 30,000" }, 
        { month : "May"      , arrow : "sales-up"  , value : "$ 31,000" }, 
        { month : "June"     , arrow : "sales-down", value : "$ 29,000" }, 
        { month : "July"     , arrow : "sales-up"  , value : "$ 35,000" }, 
        { month : "August"   , arrow : "sales-up"  , value : "$ 37,000" }, 
        { month : "September", arrow : "sales-hold", value : "$ 37,000" }, 
        { month : "October"  , arrow : "sales-hold", value : "$ 37,000" }, 
        { month : "November" , arrow : "sales-up"  , value : "$ 38,000" }, 
        { month : "December" , arrow : "sales-up"  , value : "$ 40,000" }
    ];
    
    $scope.myDataSource = new kendo.data.DataSource({
        data: $scope.list,
        schema: {
            model: {
                fields: {
                    month: { type: "string" },
                    arrow: { type: "string" },
                    value: { type: "string" }
                }
            }
        }
    });
}]);

app.controller("settingsDetailController", ["$scope", function($scope){
    $scope.currentItem = "";
    
    $scope.setCurrentItem = function(kendoEvent) {
        var id = kendoEvent.view.params.id;
        $scope.currentItem = id;
    }
    
    $scope.myTouch = {
        swipe:      function(e) { $scope.print("swipe " + e.direction, "black"    ); },
        tap:        function(e) { $scope.print("tap"                 , "lightgray"); },
        doubletap:  function(e) { $scope.print("double tap"          , "brown"    ); },
        hold:       function(e) { $scope.print("hold"                , "red"      ); }
    }
    
    $scope.consolelog = [];
    
    $scope.print = function( msg, color ) {
        var item = {
            mensagem : msg,
            cor : color
        };
        console.log($scope.consolelog);
        $scope.consolelog.unshift(item);
        
        if( $scope.consolelog.length > 10 ) {
            $scope.consolelog.pop();
        }
    }
}]);