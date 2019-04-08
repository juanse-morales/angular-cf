angular.module("ToDoList",["LocalStorageModule"])
.controller("ToDoController",["$scope","$http","localStorageService",function(s,h,l){
	if (l.get("angular-todolist")) {
		s.todo = l.get("angular-todolist");
	}else{
		s.todo = [];
	}

	s.$watch(function(){
		return s.newAct;
	},function(newValue,oldValue){
		console.log(oldValue);
		console.log(newValue);
	});

	s.$watchCollection('todo',function(newValue,oldValue){
		l.set("angular-todolist",s.todo);
	});

	s.addAct= function(){
		s.todo.push(s.newAct);
		s.newAct = {};
	}
	
	/*s.clean = function(){
		s.todo = [];
	}*/
	
}]);