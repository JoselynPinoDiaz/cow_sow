//npm install express npm body-parse npm cors npm oracledb
const BD = require('../base_datos/configbd');

///importacion de los instaladores
var express = require("express");
var app = express();
var bodyparser = require('body-parser'); //para el json
const morgan = require('morgan');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));









////MENSAJE POR TERMINAL PARA PROBAR SI FUNCIONA EL SERVIDOR
app.listen(8301, 'localhost', function(){
    console.log("EL SERVIDOR ESTA ESCUCHANDO DESDE EL PUERTO: 8301");
})