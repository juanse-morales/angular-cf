angular.module('App',[])
.run(function($rootScope){
  $rootScope.nombre = "Codigo Facilito";
})
.controller("FirstController",function($scope){
  $scope.nombre = "CF";
})
.controller("ChildController",function($scope){

})