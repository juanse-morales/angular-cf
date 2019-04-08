angular.module("App",["LocalStorageModule"])
.factory('ToDoService',["localStorageService",function(l){
  var toDoService = {};
  toDoService.key = "angular-todolist";

  if (l.get(toDoService.key)) {
    toDoService.activities = l.get(toDoService.key);
  }else{
    toDoService.activities = [];
  }

  toDoService.add = function(newActv){
    toDoService.activities.push(newActv);
    toDoService.updateLocalStorage();
  }

  toDoService.updateLocalStorage = function(){
    l.set(toDoService.key,toDoService.activities);
  }

  toDoService.clean = function(){
    toDoService.activities = [];
    toDoService.updateLocalStorage();
    return toDoService.getAll();
  }

  toDoService.getAll = function(){
    return toDoService.activities;
  }

  toDoService.removeItem = function(item){
    toDoService.activities = toDoService.activities.filter(function(activity){
      return activity !== item;
    });
    toDoService.updateLocalStorage();
    return toDoService.getAll();
  }

  return toDoService;
}])
.controller("FirstController",["$scope","ToDoService",function(s,t){
  s.newAct = {};
  s.todo = t.getAll();

  s.addAct= function(){
    t.add(s.newAct);
    s.newAct = {};
  }

  s.removeAct = function(item){
    s.todo = t.removeItem(item)
  }

  s.clean = function(){
    s.todo = t.clean();
  }


}])