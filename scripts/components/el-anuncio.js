angular
    .module("whatapop")
    .component("elAnuncio",{
        templateUrl: "views/el-anuncio.html",
        controller: function(ServicioAnuncios,$sce){
            var self = this;

            self.idActivo="";

            self.$onInit = function() {

            };


            self.$routerOnActivate = function(next) {
                /* en next.params.id tienes el identificador pasado por URL */
                //console.log(next.params.id);

                ServicioAnuncios.obtenerInfoAnuncio(next.params.id).then(function(respuesta){
                    self.anuncio = respuesta.data;
                    self.descriptionHtml = $sce.trustAsHtml(self.anuncio.description);
                });
            };

            self.obtenerRutaImagen = ServicioAnuncios.obtenerRutaImagenAbsoluta;
            
        }
    });
