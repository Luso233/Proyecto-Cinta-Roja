// crud usuarios lavanderia

const express = require("express");
const bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }) );
app.use(bodyParser.json());


// request, response
app.get('/', function (req, res) {
    res.send('¡Hola Mundo! Bienvenido a mi página');
});

// Obtener usuarios
app.get('/usuarios/', function (req, res) {
    res.send('Aquí te devolvería una lista de usuarios...');
});

// Crear un usuario
app.post('/usuarios/', (req, res) => {

    let nuevoUsuario = req.body;
    console.log(nuevoUsuario);

    /*
        Aquí habría código para acceder a la base de datos...
    */

    res.status(201).send(nuevoUsuario);
});

// Modificar un usuario
app.put('/usuarios/:param1/:param2/otrapagina/:param3/', (request, response) => {
    console.log(request.params);
    console.log(request.query);
    response.status(200).send("Usuario actualizado exitosamente!");
});

// Borrar un usuario

app.delete('/usuarios/:id/', (req, res) => {

    //res.status(204);
    //res.send(req.params);
    console.log(req.params);
    res.status(204).send(req.params);
})

app.listen(3000, function () {
    console.log('API corriendo en puerto 3000!...');
});








//
