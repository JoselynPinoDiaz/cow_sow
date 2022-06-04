//npm install express npm body-parse npm cors npm oracledb

///importaciones de los instaladores
var express = require("express");
var app = express();
var bodyparser = require('body-parser'); //para el json
var oracledb = require('oracledb');

//variable de pass bd - manu: DESA
var password = '123abc' ;

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

///METODO PARA PROBAR CONEXION DE LA CONEXION CON LA BD
app.get('/',function (req, res) {
    //   let result = await connection.execute("SELECT NOMBRE_PAIS FROM PAIS"); // TEST PARA VER LAS TABLAS DE LA BASE DE DATOS
    // console.log(result.rows);
    res.send([{ message: 'funciona' }]);
  });
//METODO GET PARA EXTRAER DATOS DE LA BD
/////Consula get para tabla pais
app.get('/paises', function (req, res) {
  "use strict";

  oracledb.getConnection(connAttrs, function (err, connection) {
      if (err) {
          // Error connecting to DB
          res.set('Content-Type', 'application/json');
          res.status(500).send(JSON.stringify({
              status: 500,
              message: "Error en la conexión con DB",
              detailed_message: err.message
          }));
          return;
      }
      connection.execute("SELECT * FROM PAIS", {}, {
          outFormat: oracledb.OBJECT // Return the result as Object
      }, function (err, result) {
          if (err) {
              res.set('Content-Type', 'application/json');
              res.status(500).send(JSON.stringify({
                  status: 500,
                  message: "Error getting the dba_tablespaces",
                  detailed_message: err.message
              }));
          } else {
              res.header('Access-Control-Allow-Origin','*');
              res.header('Access-Control-Allow-Headers','Content-Type');
              res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
              res.contentType('application/json').status(200); //MENSAJE 200 ES QUE SE LOGRÓ LA CONEXION
              res.send(JSON.stringify(result.rows));

          }
          // Release the connection
          connection.release(
              function (err) {
                  if (err) {
                      console.error(err.message);
                  } else {
                      console.log("GET /sendTablespace : Connection released");
                  }
              });
      });
  });
});
///consulta tabla comuna
app.get('/regiones', function (req, res) {
  "use strict";

  oracledb.getConnection(connAttrs, function (err, connection) {
      if (err) {
          // Error connecting to DB
          res.set('Content-Type', 'application/json');
          res.status(500).send(JSON.stringify({
              status: 500,
              message: "Error en la conexión con DB",
              detailed_message: err.message
          }));
          return;
      }
      connection.execute("select * from region", {}, {
          outFormat: oracledb.OBJECT // Return the result as Object
      }, function (err, result) {
          if (err) {
              res.set('Content-Type', 'application/json');
              res.status(500).send(JSON.stringify({
                  status: 500,
                  message: "Error getting the dba_tablespaces",
                  detailed_message: err.message
              }));
          } else {
              res.header('Access-Control-Allow-Origin','*');
              res.header('Access-Control-Allow-Headers','Content-Type');
              res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
              res.contentType('application/json').status(200); //MENSAJE 200 ES QUE SE LOGRÓ LA CONEXION
              res.send(JSON.stringify(result.rows));

          }
          // Release the connection

          connection.release(
              function (err) {
                  if (err) {
                      console.error(err.message);
                  } else {
                      console.log("GET /sendTablespace : Connection released");
                  }
              });
      });
  });
});
  app.listen(8201, 'localhost', function(){
      console.log("EL SERVIDOR ESTA ESCUCHANDO DESDE EL PUERTO: 8201");
  })

