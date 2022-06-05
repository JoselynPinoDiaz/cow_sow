//npm install express npm body-parse npm cors npm oracledb

///importacion de los instaladores
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
//***********---------METODOS GET-----------********** */
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

///consulta get tabla region
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
///CONSULTA GET PARA TABLA COMUNA
app.get('/comunas', function (req, res) {
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
      connection.execute("select * from comuna", {}, {
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

///consulta get tabla ANIMAL
app.get('/ANIMALES', function (req, res) {
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
      connection.execute("select * from ANIMAL", {}, {
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

///consulta get tabla CONTACTOS
app.get('/CONTACTOS', function (req, res) {
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
      connection.execute("select * from CONTACTO", {}, {
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

///consulta get tabla region
app.get('/DOMICILIOS', function (req, res) {
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
      connection.execute("select * from DOMICILIO", {}, {
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

///consulta get tabla ENFERMEDAD
app.get('/ENFERMEDADES', function (req, res) {
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
      connection.execute("select * from ENFERMEDAD", {}, {
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

///consulta get tabla PERSONA
app.get('/PERSONAS', function (req, res) {
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
      connection.execute("select * from PERSONA", {}, {
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

///consulta get tabla PROPIEDAD
app.get('/PROPIEDADES', function (req, res) {
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
      connection.execute("select * from PROPIEDAD", {}, {
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

///consulta get tabla region
app.get('/REPORTES', function (req, res) {
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
      connection.execute("select * from REPORTE", {}, {
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

///consulta get tabla region
app.get('/SIEMBRAS', function (req, res) {
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
      connection.execute("select * from SIEMBRA", {}, {
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

///consulta get tabla TIPO ANIMAL
app.get('/TPANIMAL', function (req, res) {
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
      connection.execute("select * from TIPO_ANIMAL", {}, {
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
///consulta get tabla TIPO PRODUCTO
app.get('/TPPRODUCTO', function (req, res) {
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
      connection.execute("select * from TIPO_PRODUCTO", {}, {
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

///consulta get tabla VACUNA
app.get('/VACUNAS', function (req, res) {
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
      connection.execute("select * from VACUNA", {}, {
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

///consulta get tabla TP_USUARIOS
app.get('/TPUSUARIOS', function (req, res) {
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
      connection.execute("select * from TIPO_USUARIO", {}, {
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

///consulta get tabla TIPO_PRODUCCION_ANIMAL
app.get('/TP_PROD_ANIMAL', function (req, res) {
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
      connection.execute("select * from TIPO_PRODUCCION_ANIMAL", {}, {
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

//////////-------------METODOS POST--------------///////////////////
/////////-------------METODOS DELETE-------------//////////////////
///consulta get tabla TIPO_PRODUCCION_ANIMAL
app.DELETE('/DEL_ANIMAL', function (req, res) {
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
      connection.execute("DELETE FROM animal WHERE  NUMERO_SERIE =11105;", {}, { //AGREGAR UN ATRIBUTO
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
                      console.log("DELETE /sendTablespace : Connection released");
                  }
              });
      });
  });
});
////////--------------METODOS UPDATE------------//////////////////


////MENSAJE POR TERMINAL PARA PROBAR SI FUNCIONA EL SERVIDOR
  app.listen(8201, 'localhost', function(){
      console.log("EL SERVIDOR ESTA ESCUCHANDO DESDE EL PUERTO: 8201");
  })

