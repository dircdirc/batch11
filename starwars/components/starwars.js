 (function(){

 		'use strict';
 		 var characters ={
 		 	bindings: {
 		 		category: "=",
 		 		id: '='
 		 	},
 		 	templateUrl:'./components/personaje.html',
 		 	controller :starCtrl
 		 };
 		angular
	 	 	.module("starsApp")
	 	 	.component("characters",characters);

	 	 starCtrl.$inject=["apiStarwars"];
	 	 function starCtrl(apiStarwars){
	 	 	var star=this;
	 	 	star.characters=null;
	 	 	star.apiData=apiStarwars.get({
	 	 		'category':star.category,
	 	 		'id':star.id})
	 	 		.$promise.then(function(response){
	 	 			star.characters=response.results;
	 	 			console.log(star.characters);
	 	 		})
	 	 }
 //		 	templateUrl : "./components/pokemons.html",
//
 	})();