(function(){
 'use strict';
  var hello = {
  	templateUrl : './partials/hello.html',
  	controller : helloCtrl

  };
 angular
  .module("myapp",[])
  .component("hello", hello)
  .controller("firstCtrl",firstCtrl);

 function firstCtrl(){
 	var first = this;
 	first.name = "Daniel";
 	first.change=change;

 	function change(){
 		first.name="Prueba";
 		}
 	function helloCtrl(){
 		var hello=this;
 		hello.saludo="controlador";

 	}
 
})();