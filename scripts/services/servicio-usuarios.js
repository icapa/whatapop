angular
    .module("whatapop")
    .service("ServicioUsuarios",function($http,Propiedades){
        this.guardarUsuario = function (usuario){
            var promesa;
            promesa = $http
                .post(Propiedades.urlServidor+Propiedades.endpointUsuarios,usuario);
            return promesa;

        }

        this.devuelveUsuarios = function(){
            return $http.get(Propiedades.urlServidor+Propiedades.endpointUsuarios);
        }

        this.devuelveUsuario = function(elUsuario){
            return $http.get(Propiedades.urlServidor+Propiedades.endpointUsuarios+"/"+elUsuario);
        }
    });
