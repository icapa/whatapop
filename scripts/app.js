angular
    .module("whatapop",
        ["ngComponentRouter","dahr.ng-haversine"]
    );

// Configuramos el proveedor "$locationProvider". Establecemos
// el modo de navegación HTML 5 para que funcione SPA
angular
    .module("whatapop")
    .config(function($locationProvider){
        $locationProvider.html5Mode(true);
    });

// En el value $routerRootComponent indicemoa el componente raiz
angular
    .module("whatapop")
    .value("$routerRootComponent","raiz");
