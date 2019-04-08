angular.module("mainModule",[])
.controller("FirstController",["$scope",function(s){
  s.nombre="Uriel";
  
  /* Una forma
  setTimeout(function(){
    s.nombre="Codigo Facilito";
    console.log(s.nombre);
    //s.$digest();
    s.$apply();
  },2000);*/

  /* Otra forma
  setTimeout(function(){
    s.$apply(function(){
      s.nombre="Codigo Facilito";
      console.log(s.nombre)
    })
  },2000) */

  document.querySelector("#mi_boton").addEventListener("click",function(){
    s.$apply(function(){
      s.nombre = "Codigo Facilito";
      console.log(s.nombre);
    })
  });
}])