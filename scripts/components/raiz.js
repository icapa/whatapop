angular
    .module("whatapop")
    .component("raiz",{


        $routeConfig: [{
            name: "MisAnuncios",
            path: "/mis-anuncios",
            component: "misAnuncios",
            useAsDefault: true
        },{
            name: "ElAnuncio",
            path: "/el-anuncio",
            component: "elAnuncio"
        },{
            name: "NuevoUsuario",
            path: "/nuevo-usuario",
            component: "nuevoUsuario"
        }],
        templateUrl: "views/raiz.html",

        controller: function($rootRouter){
            var self=this;

            self.queClase = function(){
                if ($rootRouter._childRouter.hostComponent==='elAnuncio'){
                    return "misAnuncios"
                }
                return $rootRouter._childRouter.hostComponent;
            }
        }
    });