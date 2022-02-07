const express = require('express')
const app = express()

app.use(express.static('public'))

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

app.get('/validador-dni', function(req, res) {
    let dni = req.query.dni;

    let arrayDni = dni.split("-");
    let numeros = arrayDni[0];
    let letra = arrayDni[1];

    let indice = (numeros % 23);
    let letraVerificada = letras[indice];
    let respuesta = "";

    if (letra.toUpperCase() == letraVerificada.toUpperCase()) {
        respuesta = "DNI verificado correctamente.";
    } else {
        respuesta = "Ha ocurrido un error, la letra no se corresponde al número.";
    }

    res.json({
        respuesta
    });
})

const puerto = 3000

console.log("Escuchando el puerto", puerto);

app.listen(puerto)