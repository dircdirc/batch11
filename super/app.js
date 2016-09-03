(function(){
 'use strict';
 angular
  .module("mySuper",[])
  .controller("superCtrl",superCtrl);
 
 function superCtrl(){
 	var movie = this;
 	movie.collection = [
 		{
 			'img':'./img/bagel.jpg',
 			'name':'Pan bagel World Table natural 4 pzas',
 			'cost':'$30.00'
 		},
 		{
 			'img':'./img/calabaza.jpg',
 			'name':'Calabaza japonesa por kilo',
 			'cost':'$19.90'
 		},
 		{
 			'img':'./img/destilado.jpg',
 			'name':'Destilado de agave Rancho Escondido 1.75 l',
 			'cost':'$190.00'
 		},
 		{
 			'img':'./img/helado.jpg',
 			'name':'Helado Ben and Jerrys Chunky Monkey 473 ml',
 			'cost':'$88.00'
 		},
 		{
 			'img':'./img/jugo.jpg',
 			'name':'Jugo de uva Great Value 1 l',
 			'cost':'$9.90'
 		},
 		{
 			'img':'./img/lapto.jpg',
 			'name':'MacBook Pro Apple MD 101E/A Intel Core i5 4 GB RAM 500GB',
 			'cost':'$13,999.00'
 		}, 
 		{
 			'img':'./img/lechuga.jpg',
 			'name':'Lechuga Eva italiana hidropónica por pieza',
 			'cost':'$27.00'
 		}, 
 		{
 			'img':'./img/vodka.jpg',
 			'name':'Vodka Absolut pears 750 ml',
 			'cost':'$218.98'
 		}, 
 		{
 			'img':'./img/yogur.jpg',
 			'name':'Yogurt Santa Clara con fresa 500 g',
 			'cost':'$18.00'
 		},  		 		 				 		 		 		 		
 	];
 }
})();




//IFFE
// (function()
// 	{})();