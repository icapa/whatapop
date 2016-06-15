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
        }],
        templateUrl: "views/raiz.html"
    });