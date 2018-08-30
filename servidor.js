// server js
const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//const { Articulo, Ticket } = require('./mongooseClient');



// ------------------------------------crud-------------------------------------

// CREATE
app.post('/api/lavanderia/crearUsuario', (req,res)=>{
    const {nombre, apellidos,codigoPostal, correo,contraseña, direccion,celular} = req.body

    let nuevoUsuario = Usuario({
        nombre,
        apellidos,
        codigoPostal,
        correo,
        contraseña,
        direccion,
        celular,
    })

    nuevoUsuario.save( (err, usuario)=>{
        res.status(201).send(usuario)
    })
});

// READ
//Obtener un usuario por ID
app.get('/api/lavnderia/:uid', (req, res) => {
    let {uid} = req.params
    Usuario.findById(uid)
        .exec()
        .then(usuario => res.send(Usuario))
        .catch(err => res.status(404).send(err))
});

//Obtener todos los Usuarios
app.get('/api/lavanderia', (req, res) => {
    Usuario.find({}, (err, usuario) => {
        res.status(200).send(usuarios);
    });
});


// UPDATE

app.put('/api/lavanderia/:uid', (req, res) => {
    let { uid } = req.params
    Usuario.findByIdAndUpdate(uid, {
            $set: req.body
        }, {
            new: true
        }).exec()
        .then(usuario => res.send(usuario))
        .catch(err => res.send(err))
});

// Delete

app.delete('/api/lavanderia/:uid', (req, res) => {
    let {uid} = req.params
    Usuario.findByIdAndRemove(uid).exec()
        .then(usuario => res.status(204).send())
        .catch(err => res.send(err))
});


//
