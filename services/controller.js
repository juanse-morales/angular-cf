angular.module("App",["LocalStorageModule"])
.service('ToDoService',["localStorageService",function(l){
  
  this.key = "angular-todolist";

  if (l.get(this.key)) {
    this.activities = l.get(this.key);
  }else{
    this.activities = [];
  }

  this.add = function(newActv){
    this.activities.push(newActv);
    this.updateLocalStorage();
  }

  this.updateLocalStorage = function(){
    l.set(this.key,this.activities);
  }

  this.clean = function(){
    this.activities = [];
    this.updateLocalStorage();
    return this.getAll();
  }

  this.getAll = function(){
    return this.activities;
  }

  this.removeItem = function(item){
    this.activities = this.activities.filter(function(activity){
      return activity !== item;
    });
    this.updateLocalStorage();
    return this.getAll();
  }
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

/*
  function toDoService(localStorageService){}() // Factory
  new toDoService() // Service

*/