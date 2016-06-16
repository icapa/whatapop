angular
    .module("whatapop")
    .component("misAnuncios",{
        bindings:{
            $router:"<"
        },
        templateUrl: "views/mis-anuncios.html",
        controller: function (ServicioAnuncios,ServicioUsuarios,$haversine) {

            var self = this;

            self.miPosicion=undefined;

            self.filtroDistancia={
                distancia: 1000000000
            };
            
            self.filtroAnuncios = {
                nombre: ""
            };

            self.filtroCategorias={
                nombre: ""
            };

            self.$onInit = function(){

                ServicioAnuncios.obtenerAnuncios().then(function(respuesta){
                    self.anuncios = respuesta.data;
                });
                ServicioUsuarios.devuelveUsuario(1).then(function(respuesta){
                    console.log("Puto usuario:"+ respuesta.data.email);
                });


                self.cargaPosicion();
            };
            
            self.obtenerRutaImagen = ServicioAnuncios.obtenerRutaImagenAbsoluta;

            self.cargaPosicion = function(){
                if (navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(
                        function (datos) {
                            self.miPosicion = datos.coords;
                            self.recursivaUsuarios(0);
                        },
                        function () {
                            self.miPosicion = undefined;

                        }
                    );
                }
                else{
                    self.miPosicion=undefined;
                }
            };

            self.distanciaParaUsuario = function(anuncio){
                ServicioUsuarios.devuelveUsuario("1").then(function(respuesta){
                    self.usuario = respuesta.data;
                });
            };

            self.calculaDistancia = function(coords_anuncio){
                var distance;
                if (self.miPosicion!==undefined){
                    distance = $haversine.distance(coords_anuncio,self.miPosicion);
                }
                else{
                    distance="Distancia desconocida";
                }
                return distance;
            };

            self.recursivaUsuarios = function(indiceActual){

                var iActual = indiceActual;
                ServicioUsuarios.devuelveUsuario(self.anuncios[iActual].seller.id)
                    .then(function (respuesta) {
                        self.anuncios[iActual].distancia=
                            (self.calculaDistancia(respuesta.data)/1000);
                        //console.log("Anuncio "+self.anuncios[iActual].id+"-- Dis:"
                        //    + self.anuncios[iActual].distancia);
                        //console.log("Anuncio "+"--"+" usuario:"+respuesta.data.email);
                        iActual=iActual+1;
                        if (iActual<self.anuncios.length){
                            self.recursivaUsuarios(iActual);
                        }else
                        {
                            console.log("Estan todos....BIEN !!!!!");
                        }
                    });
            }

        }
    });