angular.module("MyFirstApp",[])
.controller("FirstController",["$scope","$http",function(m,h){
  m.posts = [];
  m.loading = true;
  
  h.get("http://jsonplaceholder.typicode.com/posts")
  .then(function(datos){
    console.log(datos);
    m.loading = false;
    m.posts = datos.data;
  },function(err){
    m.loading = false;
  });
}]);