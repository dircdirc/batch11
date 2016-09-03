(function(){
 'use strict';
  var hello = {
  	templateUrl : './recursos/part1.html',
  	controller : helloCtrl

  };
 angular
  .module("myapp2",[])
  .component("hello", hello)
  .controller("firstCtrl",firstCtrl);

 function firstCtrl(){
 	var first = this;
 	first.name = "Daniel";
 	first.change=change;

 	function change(){

		first.name="Prueba";
		var size = prompt("¿Tamaño?");
		var cart = prompt("¿Simbolo 1?");
		var cart2 = prompt("¿Simbolo 2?");

		var ct="";
		document.write("<center>"); 
		document.write("<br /> <h4> ");
		document.write("Tamaño:");
		document.write(size);
		document.write("<br />");
		document.write("Simbolo 1:");
		document.write(cart);
		document.write("<br />");
		document.write("Simbolo 2:");
		document.write(cart2);
		document.write("</h4><br />");
		document.write("</center>"); 

 		document.write("<center>"); 
 		for(var i=0; i<size;i++)
 		{
 			for(var c=0;c<15;c++)
 			{
				if(i%2==0)
				 ct=cart;
				else
				 ct=cart2;

 				if(Math.abs(4-c)<=i)
 					document.write(ct); 				 				
 			}
 			document.write("<br />");
 		}
 		document.write("</center>");
 		document.write("<center>"); 		
 		for(var i=0; i<size;i++)
 		{
 			for(var c=0;c<=i;c++)
 			{
				if(i%2==0)
				 ct=cart;
				else
				 ct=cart2; 				
 				
 				document.write(ct);
 			}
 			document.write("<br />");
 		}
 		document.write("</center>");
 		document.write("<center>"); 		
 		for(var i=size; i>0;i--)
 		{
 			for(var c=0;c<i;c++)
 			{
				if(i%2==0)
				 ct=cart;
				else
				 ct=cart2;

 				document.write(ct);
 			}
 			document.write("<br />");
 		}
 		document.write("</center>");
 	}
 }
 	function helloCtrl(){
 		var hello=this;
 		hello.saludo="controlador";
 	}
})();