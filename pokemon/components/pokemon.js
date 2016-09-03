 (function(){

 		'use strict';
 		var pok ={
 			templateUrl : "./components/pokemons.html",
 			controller :pokemonCtrl
 		};
 		angular
	 		.module("pkm")
	 		.component("pok",pok);

	 	pokemonCtrl.$inject=["apiPokemon"];
	 	function pokemonCtrl(apiPokemon){
	 		var pok=this;
	 		pok.char=null;
	 		pok.dataPko=apiPokemon.get()
	 			.$promise.then(function(response){
	 				pok.char=response.results;
	 			})
	 	}

 	})();