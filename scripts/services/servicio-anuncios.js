angular
    .module("whatapop")
    .service("ServicioAnuncios",function($http,Propiedades){

    this.obtenerAnuncios = function(){
        return $http.get(Propiedades.urlServidor+Propiedades.endpointAnuncios);
    };

    this.obtenerInfoAnuncio = function(id){
        return $http.get(Propiedades.urlServidor+Propiedades.endpointAnuncios+"/"+id)
    };

    this.obtenerRutaImagenAbsoluta = function(rutaRelativa){
        return rutaRelativa
            ? (Propiedades.urlServidor + "/" + rutaRelativa)
            : undefined;
    };

});