angular
    .module("whatapop")
    .value("Propiedades",{
        urlServidor: "http://localhost:8000",
        endpointAnuncios: "/api/products",
        endpointUsuarios: "/api/users"
    })