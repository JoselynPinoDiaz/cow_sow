//npm install express npm body-parse npm cors npm oracledb

///importacion de los instaladores
var express = require("express");
var app = express();
var bodyparser = require('body-parser'); //para el json
var oracledb = require('oracledb');


//variable de pass bd - manu: DESA
//var password = '123abc' ;
var password = 'DESA' ;
var funcion = 'Open';

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));
//datos de conexion
var connAttrs = {
    user: "DESA",
    password: password,
    connectString: "localhost:1521/xepdb1"
  }


  async function Open(sql, binds, autoCommit) {
    let cnn = await oracledb.getConnection(cns);
    let result = await cnn.execute(sql, binds, { autoCommit });
    cnn.release();
    return result;
}

exports.Open = Open;

///METODO PARA PROBAR CONEXION DE LA CONEXION CON LA BD
//app.get('/',function (req, res) {
    //   let result = await connection.execute("SELECT NOMBRE_PAIS FROM PAIS"); // TEST PARA VER LAS TABLAS DE LA BASE DE DATOS
    // console.log(result.rows);
 //   res.send([{ message: 'funciona' }]);
 // });

////MENSAJE POR TERMINAL PARA PROBAR SI FUNCIONA EL SERVIDOR
app.listen(8301, 'localhost', function(){
    console.log("EL SERVIDOR ESTA ESCUCHANDO DESDE EL PUERTO: 8301");
})


app.get('/',(req, res) =>{
    sql = "SELECT * FROM contacto";

    let result = await funcion.Open(sql, [], false);
    console.log(result);


    res.status(200).json([{ message: 'funciona' }]);

})
