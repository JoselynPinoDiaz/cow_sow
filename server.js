//npm install express npm body-parse npm cors npm oracledb
///importacion de los instaladores
var express = require("express");
var app = express();
//var router = express.Router();
var bodyparser = require('body-parser'); //para el json
var oracledb = require('oracledb');
const cors = require('cors');
const { resetSourceFiles } = require("@ionic/app-scripts/dist/transpile");



const whiteList = ['http://localhost:8100','http://localhost:8201']

app.use(cors({origin: whiteList}));

//variable de pass bd - manu: DESA
//var password = '123abc' ;
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
app.get('/PRUEBAS', function (req, res) {
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
      connection.execute("SELECT * FROM PRUEBA", {}, {
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
      connection.execute("SELECT * FROM ANIMAL", {}, {
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
      connection.execute("SELECT ID_CONTACTO, NOMBRE, EMAIL, EMAIL,TELEFONO, DESCRIPCION FROM CONTACTO WHERE ID_CONTACTO = ID_CONTACTO", {}, {
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
              res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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
      connection.execute("SELECT P.RUT||'-'||P.DV_RUT AS RUT,P.PNOMBRE||' '||P.SNOMBRE||' '||P.PAPELLIDO||' '||P.SAPELLIDO AS NOMBRE,P.FECHA_NACIMIENTO,TP.EMAIL,TP.TIPO_USUARIO,DO.DIRECCION||''||DO.NUMERO AS DIRECCION,DO.TIPO_DIRECCION,CO.NOMBRE_COMUNA,RE.NOMBRE_REGION,PA.NOMBRE_PAIS,TP.DESCRIPCION FROM PERSONA P JOIN TIPO_USUARIO TP ON P.ID_TIPO_USUARIO = TP.ID_TIPO_USUARIO JOIN DOMICILIO DO ON DO.ID_DOMICILIO = P.ID_DOMICILIO JOIN COMUNA CO ON CO.ID_COMUNA = DO.ID_COMUNA JOIN REGION RE ON RE.ID_REGION = CO.ID_REGION JOIN PAIS PA ON PA.ID_PAIS = RE.ID_PAIS", {}, {
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
        connection.execute("SELECT * FROM TIPO_USUARIO", {}, {
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
      connection.execute("SELECT * FROM PROPIEDAD", {}, {
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
      connection.execute("SELECT * FROM SIEMBRA", {}, {
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
/**
 * DELETE FROM animal
    WHERE  NUMERO_SERIE =11105;


INSERT INTO ANIMAL (NUMERO_SERIE, NOMBRE_ANIMAL, PESO,ID_VAC_SERIE, ID_TIPO_ANIMAL,CRIAS,ID_TIPO_PROD_ANIMAL,ID_ENFERMEDAD,ID_REPORTE,ID_PROPIEDAD) VALUES (11105,'lulu',52,1,1,1,1,1,1,1);

select * from animal
 * */
///consulta get tabla TIPO_PRODUCCION_ANIMAL   ver esta vaina
app.delete('/DEL_ANIMAL/:ID', function (req, res) {
  "use strict"

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
      connection.execute("DELETE FROM ANIMAL WHERE NUMERO_SERIE = ID", {}, { //AGREGAR UN ATRIBUTO
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


////-----------------------METODOS DELETE
app.get('/deletePais/:id', function (req, res,next) {
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
        connection.execute('DELETE FROM pais where id_pais =: id ', [ req.params.id], {
            outFormat: oracledb.OBJECT, // Return the result as Object
            autoCommit:true
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
            doRelease(connection);
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
app.get('/deleteAnimal/:id', function (req, res,next) {
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
        connection.execute('DELETE FROM ANIMAL where NUMERO_SERIE =: id ', [ req.params.id], {
            outFormat: oracledb.OBJECT, // Return the result as Object
            autoCommit:true
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
            doRelease(connection);
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
app.get('/deleteComuna/:id', function (req, res,next) {
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
        connection.execute('DELETE FROM COMUNA where ID_COMUNA =: id ', [ req.params.id], {
            outFormat: oracledb.OBJECT, // Return the result as Object
            autoCommit:true
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
            doRelease(connection);
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
app.get('/deleteContacto/:id', function (req, res,next) {
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
        connection.execute('DELETE FROM CONTACTO where ID_CONTACTO =: id ', [ req.params.id], {
            outFormat: oracledb.OBJECT, // Return the result as Object
            autoCommit:true
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
            doRelease(connection);
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
app.get('/deleteDomicilio/:id', function (req, res,next) {
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
        connection.execute('DELETE FROM DOMICILIO where ID_DOMICILIO =: id ', [ req.params.id], {
            outFormat: oracledb.OBJECT, // Return the result as Object
            autoCommit:true
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
            doRelease(connection);
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
app.get('/deleteEnfermedad/:id', function (req, res,next) {
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
        connection.execute('DELETE FROM ENFERMEDAD where ID_ENFERMEDAD =: id ', [ req.params.id], {
            outFormat: oracledb.OBJECT, // Return the result as Object
            autoCommit:true
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
            doRelease(connection);
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
app.get('/deletePersona/:id', function (req, res,next) {
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
        connection.execute('DELETE FROM PERSONA where RUT =: id ', [ req.params.id], {
            outFormat: oracledb.OBJECT, // Return the result as Object
            autoCommit:true
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
            doRelease(connection);
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
app.get('/deletePropiedad/:id', function (req, res,next) {
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
        connection.execute('DELETE FROM PROPIEDAD where ID_PROPIEDAD =: id ', [ req.params.id], {
            outFormat: oracledb.OBJECT, // Return the result as Object
            autoCommit:true
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
            doRelease(connection);
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
app.get('/deleteRegion/:id', function (req, res,next) {
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
        connection.execute('DELETE FROM REGION where ID_REGION =: id ', [ req.params.id], {
            outFormat: oracledb.OBJECT, // Return the result as Object
            autoCommit:true
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
            doRelease(connection);
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
app.get('/deleteReporte/:id', function (req, res,next) {
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
        connection.execute('DELETE FROM REPORTE where ID_REPORTE =: id ', [ req.params.id], {
            outFormat: oracledb.OBJECT, // Return the result as Object
            autoCommit:true
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
            doRelease(connection);
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
app.get('/deleteSiembra/:id', function (req, res,next) {
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
        connection.execute('DELETE FROM SIEMBRA where ID_SIEMBRA =: id ', [ req.params.id], {
            outFormat: oracledb.OBJECT, // Return the result as Object
            autoCommit:true
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
            doRelease(connection);
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
app.get('/deleteTAnimal/:id', function (req, res,next) {
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
        connection.execute('DELETE FROM TIPO_ANIMAL where ID_TIPO_ANIMAL =: id ', [ req.params.id], {
            outFormat: oracledb.OBJECT, // Return the result as Object
            autoCommit:true
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
            doRelease(connection);
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
app.get('/deleteTProduccion/:id', function (req, res,next) {
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
        connection.execute('DELETE FROM TIPO_PRODUCCION where ID_TIPO_PRODUCCION =: id ', [ req.params.id], {
            outFormat: oracledb.OBJECT, // Return the result as Object
            autoCommit:true
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
            doRelease(connection);
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
app.get('/deleteTProdAnimal/:id', function (req, res,next) {
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
        connection.execute('DELETE FROM TIPO_PRODUCCION_ANIMAL where ID_TIPO_PROD_ANIMAL =: id ', [ req.params.id], {
            outFormat: oracledb.OBJECT, // Return the result as Object
            autoCommit:true
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
            doRelease(connection);
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
app.get('/deleteTUsuario/:id', function (req, res,next) {
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
        connection.execute('DELETE FROM TIPO_USUARIO where ID_TIPO_USUARIO =: id ', [ req.params.id], {
            outFormat: oracledb.OBJECT, // Return the result as Object
            autoCommit:true
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
            doRelease(connection);
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
app.get('/deleteVacuna/:id', function (req, res,next) {
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
        connection.execute('DELETE FROM VACUNA where ID_VAC_SERIE =: id ', [ req.params.id], {
            outFormat: oracledb.OBJECT, // Return the result as Object
            autoCommit:true
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
            doRelease(connection);
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





////////--------------METODOS INSERT------------//////////////////
//consulta get tabla CONTACTOS
app.get('/addPais', function (req, res,next) {
    "use strict";
      var id_test = req.params.id;
      var nombre = req.params.nombre;
      var descrip = req.params.descrip;
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
            connection.execute("INSERT INTO PAIS (ID_PAIS, NOMBRE_PAIS, DESCRIPCION ) VALUES (2, 'cccc','Pais destacado por la ganaderia y agricultura') ", {}, {
            outFormat: oracledb.OBJECT ,// Return the result as Object
            autoCommit:true
  
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
          doRelease(connection);
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
  








////MENSAJE POR TERMINAL PARA PROBAR SI FUNCIONA EL SERVIDOR
  app.listen(8201, 'localhost', function(){
      console.log("EL SERVIDOR ESTA ESCUCHANDO DESDE EL PUERTO: 8201");
  })


 
