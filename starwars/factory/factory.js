 (function()
 	{
 		'use strict';
 		angular
 		.module("starsApp")
 		.factory("apiStarwars",apiStarwars);

 		apiStarwars.$inject=["$resource"];
 		function apiStarwars($resource){
 			return $resource("http://swapi.co/api/:category/:id");
 			//return $resource("https://pokeapi.co:443/api/v2/pokemon/?limit=11&offset=44");
 		};

 	})();