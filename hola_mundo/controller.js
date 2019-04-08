angular.module("Filters",[])
.filter("removeHtml",function(){
	return function(texto){
		return String(texto).replace(/<[^>]+>/gm,'');
	}
})
.controller("FilterCtrl",["$scope",function(s){
	s.html= "<p>Mi Hola <b>Mundo</b></p>";
	
	s.jsn = {};
	s.jsn.title = "Titulo";
	s.jsn.body = "Hola mundo";
	s.jsn.foot = "jajaja";

	s.cost = 970;
}]);