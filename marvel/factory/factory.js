 (function()
 	{
 		'use strict';
 		angular
 		.module("marvel")
 		.factory("apiMarvel",apiMarvel);

 		apiMarvel.$inject=["$resource"];
 		function apiMarvel($resource){
 			var apikey="a7d93db0138452cc810d994c2f2cfd02";
 			var hash="1e59c6364702e8c291170c23da5d4a6d";
 			return $resource("http://gateway.marvel.com/v1/public/characters?ts=1&apikey="+apikey+"&hash="+hash);

 		};

 	})();