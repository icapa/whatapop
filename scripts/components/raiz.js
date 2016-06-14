angular
    .module("whatapop")
    .component("raiz",{
        $routeConfig: [{
            name: "MisAnuncios",
            path: "/mis-anuncios",
            component: "misAnuncios"
        },{
            name: "ElAnuncio",
            path: "/el-anuncio",
            component: "elAnuncio"
        }],
        templateUrl: "views/raiz.html"
    });