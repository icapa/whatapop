angular
    .module("whatapop")
    .component("misAnuncios",{
        templateUrl: "views/mis-anuncios.html",
        controller: function (ServicioAnuncios) {

            var self = this;

            self.filtroAnuncios = {
                nombre: ""
            }

            self.filtroCategorias={
                nombre: ""
            }

            self.$onInit = function(){

                ServicioAnuncios.obtenerAnuncios().then(function(respuesta){
                    self.anuncios = respuesta.data;
                });
            };
            
            self.obtenerRutaImagen = ServicioAnuncios.obtenerRutaImagenAbsoluta;
            

        }
    });