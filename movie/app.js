(function(){
 'use strict';
 angular
  .module("myMovies",[])
  .controller("movieCtrl",movieCtrl);
 
 function movieCtrl(){
 	var movie = this;
 	movie.collection = [
 		{
 			'img':'./img/img1.jpg',
 			'name':'Suicide Squad',
 			'cast':['Will Smith', 'Jared Leto', 'Margot Robbie', 'Viola Davis'],
 			'year':'2016',
 			'category':'Action | Adventure | Crime | Fantasy | Sci-Fi'
 		},
 		{
 			'img':'./img/img2.jpg',
 			'name':'La vida secreta de tus mascotas',
 			'cast':['Louis C.K.', 'Eric Stonestreet', 'Kevin Hart', 'Lake Bell'],
 			'year':'2016',
 			'category':'Animation | Adventure | Comedy | Family'
 		},
 		{
 			'img':'./img/img3.jpg',
 			'name':'Now You See Me 2',
 			'cast':['Jesse Eisenberg', 'Mark Ruffalo', 'Woody Harrelson', 'Dave Franco'],
 			'year':'2016',
 			'category':'Action | Adventure | Comedy | Crime | Mystery |'
 		},
 		{
 			'img':'./img/img4.jpg',
 			'name':'Jason Bourne',
 			'cast':['Matt Damon', 'Tommy Lee Jones', 'Alicia Vikander', 'Vincent Cassel'],
 			'year':'2016',
 			'category':'Action | Thriller'
 		},
 		{
 			'img':'./img/img5.jpg',
 			'name':'Bad Moms',
 			'cast':['Mila Kunis', 'Kathryn Hahn', 'Kristen Bell', 'Christina Applegate'],
 			'year':'2016',
 			'category':'Comedy'
 		},
 		{
 			'img':'./img/img6.jpg',
 			'name':'The Whole Truth',
 			'cast':['Renée Zellweger', 'Keanu Reeves', 'Gugu Mbatha-Raw', 'Jim Belushi'],
 			'year':'2016',
 			'category':'Drama | Thriller'
 		}, 		 		 		 		 		
 	];
 }
})();




//IFFE
// (function()
// 	{})();