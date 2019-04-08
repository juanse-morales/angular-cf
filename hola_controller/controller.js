angular.module("MyFirstApp",[])
.controller("FirstController",["$scope",function(m){
	m.nombre="Marta";
	m.apellido="Gómes";
	m.acum = 1;
	m.nuevoComentario = {
		fecha:"Septiembre, 13 del 2018",
		addressip:"192.168.1."+m.acum++
	};
	m.comentarios= [
	{
		comentario: "Falta convicción",
		username: "Wilder",
		fecha:"Septiembre, 13 del 2018",
		addressip:"192.168.1.3"
	},
	{
		comentario: "Excelente, Me gustó",
		username: "Sara",
		fecha:"Septiembre, 13 del 2018",
		addressip:"192.168.1.4"	
	},
	{
		comentario: "Sé más específico",
		username: "Sara",
		fecha:"Septiembre, 15 del 2018",
		addressip:"192.168.4.54"	
	},
	];
	m.agregarComentario = function(){
		m.comentarios.push(m.nuevoComentario);
		m.nuevoComentario = {
			fecha:"Septiembre, 13 del 2018",
			addressip:"192.168.1."+m.acum++
		};
	}
}]);