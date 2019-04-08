angular.module("MyFirstApp",[])
.controller("FirstController",["$scope","$http",function(m,h){
	m.posts = [];
	m.newPost = {};
	
	h.get("http://jsonplaceholder.typicode.com/posts")
	.then(function(datos){
		console.log(datos);
		m.posts = datos.data;
	},function(error){

	});
	
	m.addPost= function(){
		h.post("http://jsonplaceholder.typicode.com/posts",{
			title: m.newPost.title,
			body: m.newPost.body,
			userId: 1
		}).then(function(data,status,headers,config){
			console.log(data);
			m.posts.push(data.data);
			m.newPost = {};
		},function(error,status,headers,config){

		});
	}

}]);