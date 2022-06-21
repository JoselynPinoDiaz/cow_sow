//npm install express npm body-parse npm cors npm oracledb
const BD = require('../base_datos/configbd');


///importacion de los instaladores
var express = require("express");
var app = express();
var bodyparser = require('body-parser'); //para el json
const morgan = require('morgan');
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));


/////ontacto

//SELECT READ
app.get('/getContacto', async (req, res) => {
    sql = "select * from CONTACTO ";

    let result = await BD.Open(sql, [], false);
    contactos = [];

    result.rows.map(cotacto => {
        let userSchema = {
            "NOMBRE": cotacto[1],
            "EMAIL": cotacto[2],
            "TELEFONO": cotacto[3],
            "DESCRIPCION": cotacto[4]
        }

        contactos.push(userSchema);
        console.log(result);
    })

    res.json(contactos);
    
})


// POST CREATE

app.post('/postContacto', async (req, res) => {
    var { ID_CONTACTO, NOMBRE, EMAIL, TELEFONO, DESCRIPCION} = req.body;

    sql = "INSERT INTO CONTACTO (ID_CONTACTO, NOMBRE, EMAIL,TELEFONO,DESCRIPCION ) VALUES (:ID_CONTACTO, :NOMBRE, :EMAIL, :TELEFONO, :DESCRIPCION)";

    await BD.Open(sql, [ID_CONTACTO, NOMBRE, EMAIL, TELEFONO , DESCRIPCION], true);

    res.status(200).json({
            "ID_CONTACTO":ID_CONTACTO,
            "NOMBRE": NOMBRE,
            "EMAIL": EMAIL,
            "TELEFONO": TELEFONO,
            "DESCRIPCION": DESCRIPCION
    })
    
})



////////////PERSONA

//READ
app.get('/getPersona', async (req, res) => {
    sql = "select * from persona ";

    let result = await BD.Open(sql, [], false);
    personas = [];

    result.rows.map(persona => {
        let userSchema = {
            "RUT": persona[0],
            "DV_RUT": persona[1],
            "PNOMBRE": persona[2],
            "SNOMBRE": persona[3],
            "PAPELLIDO": persona[4],
            "SAPELLIDO": persona[5],
            "FECHA_NACIMIENTO": persona[6]
        }

        personas.push(userSchema);
        console.log(result);
    })

    res.json(personas);
    
})


//CREATE

app.post('/postPersona', async (req, res) => {
    const { RUT, DV_RUT, PNOMBRE, SNOMBRE, PAPELLIDO, SAPELLIDO, FECHA_NACIMIENTO,ID_TIPO_USUARIO,ID_DOMICILIO} = req.body;

    sql = "INSERT INTO PERSONA (RUT, DV_RUT, PNOMBRE,SNOMBRE, PAPELLIDO,SAPELLIDO,FECHA_NACIMIENTO,ID_TIPO_USUARIO,ID_DOMICILIO) VALUES (:RUT, :DV_RUT, :PNOMBRE, :SNOMBRE, :PAPELLIDO, :SAPELLIDO, :FECHA_NACIMIENTO, :ID_TIPO_USUARIO, :ID_DOMICILIO)";

    await BD.Open(sql, [RUT, DV_RUT, PNOMBRE,SNOMBRE, PAPELLIDO,SAPELLIDO,FECHA_NACIMIENTO,ID_TIPO_USUARIO,ID_DOMICILIO], true);

    res.status(200).json({
            "RUT": RUT,
            "DV_RUT": DV_RUT,
            "PNOMBRE": PNOMBRE,
            "SNOMBRE": SNOMBRE,
            "PAPELLIDO": PAPELLIDO,
            "SAPELLIDO": SAPELLIDO,
            "FECHA_NACIMIENTO": FECHA_NACIMIENTO,
            "ID_TIPO_USUARIO" :ID_TIPO_USUARIO,
            "ID_DOMICILIO": ID_DOMICILIO
    })
    
})


////////////TIPO_USUARIO

//READ
app.get('/getTusuario', async (req, res) => {
    sql = "select * from TIPO_USUARIO ";

    let result = await BD.Open(sql, [], false);
    Tusuarios = [];

    result.rows.map(Tusuario => {
        let userSchema = {
            "TIPO_USUARIO": Tusuario[0],
            "EMAIL": Tusuario[1],
            "CONTRASEÑA": Tusuario[2],
            "DESCRIPCION": Tusuario[3]
        }

        Tusuarios.push(userSchema);
        console.log(result);
    })

    res.json(Tusuarios);
    
})


//CREATE

app.post('/postTusuario', async (req, res) => {
    var { ID_TIPO_USUARIO, TIPO_USUARIO, EMAIL, CONTRASEÑA, DESCRIPCION } = req.body;

    sql = "INSERT INTO TIPO_USUARIO (ID_TIPO_USUARIO, TIPO_USUARIO, EMAIL, CONTRASEÑA, DESCRIPCION) VALUES (:ID_TIPO_USUARIO, :TIPO_USUARIO, :EMAIL, :CONTRASEÑA, :DESCRIPCION)";

    await BD.Open(sql, [ID_TIPO_USUARIO, TIPO_USUARIO, EMAIL, CONTRASEÑA, DESCRIPCION], true);

    res.status(200).json({
            "ID_TIPO_USUARIO": ID_TIPO_USUARIO,
            "TIPO_USUARIO": TIPO_USUARIO,
            "EMAIL": EMAIL,
            "CONTRASEÑA": CONTRASEÑA,
            "DESCRIPCION": DESCRIPCION
    })
    
})

app.post("/signUp", async (req, res) =>{
    const {EMAIL} = req.body;

    sql = "SELECT TIPO_USUARIO, EMAIL, CONTRASEÑA, DESCRIPCION FROM TIPO_USUARIO WHERE EMAIL = EMAIL";

    let result = await BD.Open(sql, [EMAIL], false);

    console.log(result);
    res.status(200).json({mesg: 'todo ok'});
    
})





////MENSAJE POR TERMINAL PARA PROBAR SI FUNCIONA EL SERVIDOR
app.listen(8301, 'localhost', function(){
    console.log("EL SERVIDOR ESTA ESCUCHANDO DESDE EL PUERTO: 8301");
})
