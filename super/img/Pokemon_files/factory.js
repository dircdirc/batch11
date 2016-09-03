 (function()
 	{
 		'use strict';
 		angular
 		.module("pkm")
 		.factory("apiPokemon",apiPokemon);

 		apiPokemon.$inject=["$resource"];
 		function apiPokemon($resource){
 			
 			return $resource("https://pokeapi.co:443/api/v2/pokemon/?limit=60&offset=1");
 			//return $resource("https://pokeapi.co:443/api/v2/pokemon/?limit=11&offset=44");
 		};
/*

 		.factory("apiPokemon2",apiPokemon2);
 		apiPokemon2.$inject=["$resource"];
 		function apiPokemon2($resource){
 			
 			return $resource("https://pokeapi.co:443/api/v2/pokemon/?limit=60&offset=1");
 			//return $resource("https://pokeapi.co:443/api/v2/pokemon/?limit=11&offset=44");
 		};*/

 	})();