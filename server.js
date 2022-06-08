var express = require("express");
var app = express();
var bodyparser = require('body-parser');
var oracledb = require('oracledb');

var password = 'DESA' ;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true

}));

//datos de conexion
var connAttrs = {
    user: "DESA",
    password: password,
    connectString: "localhost:1521/xepdb1"
    //connectString: "(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS =(PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=XEpdb1)(FAILOVER_MODE=(TYPE=SELECT)(METHOD = BASIC))))"
}
  ///METODO PARA PROBAR CONEXION DE LA CONEXION CON LA BD
app.get('/', (req,res)=>{
 //  let result = await connection.execute("SELECT NOMBRE_PAIS FROM PAIS"); // TEST PARA VER LAS TABLAS DE LA BASE DE DATOS
   // console.log(result.rows); 
    res.send([{message: 'funciona'}]);



    /////Consulter users////// done
app.get('/paises', function (req, res) {
  "use strict";

  oracledb.getConnection(connAttrs, function (err, connection) {
      if (err) {
          // Error connecting to DB
          res.set('Content-Type', 'application/json');
          res.status(500).send(JSON.stringify({
              status: 500,
              message: "Error connecting to DB",
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
              res.contentType('application/json').status(200);
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


    
});
  app.listen(4201, 'localhost', function(){
      console.log("EL SERVIDOR ESRA ESCUCHANDO DESDE EL PUERTO: 4201");
  })
  
