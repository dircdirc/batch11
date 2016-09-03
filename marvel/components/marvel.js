 (function(){

 		'use strict';
 		var hero ={
 			templateUrl : "./components/hero.html",
 			controller :marvelCtrl
 		};
 		angular
	 		.module("marvel")
	 		.component("hero",hero);

	 	marvelCtrl.$inject=["apiMarvel"];
	 	function marvelCtrl(apiMarvel){
	 		var hero=this;
	 		hero.char=null;
	 		hero.dataMarvel=apiMarvel.get()
	 			.$promise.then(function(response){
	 				hero.char=response.data.results;
	 			})
	 	}

 	})();