angular
    .module("whatapop")
    .directive("formularioAlta",function(){
        return{
            // Usamos la directiva como atributo y elemento
            restrict: "EA",

            // Para renderizar la vista
            templateUrl: "views/formulario-alta.html",

            // Con scope definimos la interfaz de comunucacion entre
            // la directiva y el scope padre componente
            scope:{
                alHacerClick: "&"   // Con & notificamos eventos al controlador padre
            },

            // Establecemos la lógica de la directiva y además
            // Podemos manipular el DOM de la vista
            link: function(scope){
                scope.usuario = {
                    name:"",
                    nick:"",
                    avatar:"",
                    latitud:"",
                    longitud:"",
                    email:"",
                    email2:""
                };

                scope.datosCorrectos = function(){
                    if (!scope.usuario.name || scope.usuario.name==""){
                        return false;
                    }
                    if (!scope.usuario.nick || scope.usuario.nick==""){
                        return false;
                    }
                    if (!scope.usuario.email || scope.usuario.email==""){
                        return false;
                    }
                    if (!scope.usuario.email2 || scope.usuario.email2==""){
                        return false;
                    }
                    if (scope.usuario.email !== scope.usuario.email2){
                        return false;
                    }


                    return true;

                };
                scope.guardarUsuario =  function(){
                    scope.alHacerClick({usuario: scope.usuario});
                }

            }
        }
    });