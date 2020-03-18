//Modulos
let express = require('express');
let app = express();

//Variable
app.set('port', 8081)

//Rutas/controladores
require("./routes/rusuarios.js")(app);
require("./routes/rcanciones.js")(app);

// lanzar el servidor
app.listen(app.get('port'), function () {
    console.log("Servidor activo");
});