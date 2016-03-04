angular.module('main').controller('HomeCtrl',function($scope){

    $scope.buttonClick = function(){
        $scope.hide = !$scope.hide;
    };
    $scope.getString = function(){
        return "I'm a STRING";
    };
    $scope.addItem = function(){
        $scope.array.push($scope.newItem);
        $scope.newItem ='';
    };
    $scope.removeItem = function(item){
        var index = $scope.array.indexOf(item);
        if(index >= 0){
            $scope.array.splice(index,1);
        }
    };
    $scope.array = [
        'TEST',
        'ANOTHER',
        'PATATAS'

    ];
    $scope.boundItem =  {Name:"test", ItemCode:"32AAb"};

});
