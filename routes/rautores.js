module.exports = function(app, swig, gestorBD) {
    app.get("/autores", function(req, res) {
        let autores = [{
            "nombre" : "Bruce Springsteen"
        },{
            "nombre" : "Slash",
            "grupo" : "Guns & Roses",
            "rol" : "Guitarrista"
        },{
            "nombre" : "Axel Rose",
            "grupo" : "Guns & Roses",
            "rol" : "Cantante"
        }]

        let respuesta = swig.renderFile('views/autores.html', {
            guia: 'Lista de autores',
            autores: autores
        })

        res.send(respuesta);
    });

    app.get('/autores/agregar', function (req, res) {
        let respuesta = swig.renderFile('views/autores-agregar.html', {

        });
        res.send(respuesta);
    })

    app.post('/autores/agregar', function(req, res) {
        let respuesta = "";
        if (req.body.nombre !== null || req.body.nombre !== "") {
            respuesta += "Autores agregados: " + req.body.nombre + "<br>";
        }
        if (req.body.grupo !== null && req.body.grupo !== "") {
            respuesta += "Grupo: " + req.body.grupo + "<br>";
        }
        if (typeof (req.body.rol) != "undefined" && req.body.rol !== "") {
            respuesta += "Rol: " + req.body.rol + "<br>"
        }
        res.send(respuesta);
    });

    app.get('/autores/*', function (req, res) {
        res.redirect('/autores');
    })
};