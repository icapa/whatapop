angular
    .module("whatapop")
    .component("nuevoUsuario",{
        bindings:{
            $router: "<"
        },

        templateUrl: "views/nuevo-usuario.html",
        controller: function(ServicioUsuarios){
            var self = this;





            self.guardarUsuario = function(usuario){
                ServicioUsuarios
                    .guardarUsuario(usuario)
                    .then(function(){
                        alert("Usuario creado OK");
                        self.$router.navigate(["MisAnuncios"]);
                    })
            }

        }
    });
