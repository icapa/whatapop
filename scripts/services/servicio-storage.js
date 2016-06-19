angular
    .module("whatapop")
    .service("ServicioStorage",function(){

        this.losFavoritos=undefined;

        this.leeFavoritos = function(){

        };

        this.guardaFavorito = function(identificador,estado){
                if (typeof (Storage) !== "undefined"){
                        sessionStorage.setItem(identificador,estado);
                }
        };

        this.esFavorito = function(identificador){
                if (typeof (Storage) !== "undefined"){
                        var fav=sessionStorage.getItem(identificador);
                        if (fav==="false" || fav===undefined || fav===null){
                                return false;
                        }
                        else{
                                return true;
                        }
                }
        };
        this.borraTodo = function(){
                if (typeof (Storage) !== "undefined"){
                        sessionStorage.clear();
                }
        }
    });

