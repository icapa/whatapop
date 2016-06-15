angular
    .module("whatapop")
    .filter("FiltroCategoria",function(){
       return function(categoria){
           categoria = categoria || '';
           if (categoria==='Libros'){
               return "static/images/libro.jpeg"
           }
           else if (categoria==='Películas'){
               return "static/images/peli.jpeg"
           }
           else if (categoria==='Videojuegos'){
               return "static/images/videojuego.jpeg"
           }
           return "static/images/sinCategoria.jpeg"
       };
    });