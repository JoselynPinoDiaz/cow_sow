var express = require("express"); //npm install express npm body-parse npm cors npm oracledb
var app = express();
var router  = express.Router();
var bodyparser = require('body-parser'); //para el json
var oracledb = require('oracledb');
var  asyncScheduler  = require("rxjs");
var cors = require('cors');
var  autoCommit  = require("oracledb");
app.use(cors());
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

///--------------------METODO PARA PROBAR CONEXION DE LA CONEXION CON LA BD
app.get('/',function (req, res) {

    res.send([{ message: 'funciona' }]);
  });
///---------------------MetodoS GET para traer la info de cada tabla
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
        connection.execute("select * from pais", {}, {
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
app.get('/userapp', function (req, res) {
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
      connection.execute("select * from USERLOGIN", {}, {
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


////-----------METODOS DE PRUEBA QUE PUEDEN MEJORAR ------
      ////al aplicar el .delete tira 200 en postman pero no se ve reflejado el cambio en la bd.3
      app.delete('/delete', function (req, res,next) {
        var idPais = req.query.idPais;
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
              connection.execute("DELETE FROM pais where id_pais =: idPais", [idPais], {
                autoCommit:true,
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
      //////--------------METODOS POST funciona con valores en duro------------------///////////////////
      app.post('/addPais', function (req, res,next) {
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
      //prueba de post FUNCIONA CON UN PARAMETRO
        app.get('/test', function (req, res,next) {
          "use strict";
        var IDTEST = req.query.IDTEST
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
            connection.execute('INSERT INTO test (ID_TEST) VALUES (:IDTEST)', [IDTEST], {
              autoCommit:true,
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

////-----------------------METODOS DELETE
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

///-----------------------METODOS POST   -> esto deberia ser post
app.get('/add_Pais', function (req, res,next) {
  "use strict";
 var idPais = req.query.idPais
 var nombrePais = req.query.nombrePais
  var desPais = req.query.desPais
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
    connection.execute('INSERT INTO PAIS (ID_PAIS, NOMBRE_PAIS, DESCRIPCION) VALUES (:idPais,:nombrePais,:desPais)',[idPais,nombrePais,desPais], {
      autoCommit:true,
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
app.get('/add_REPORTE', function (req, res,next) {
  "use strict";
 var IDREPORTE = req.query.IDREPORTE
 var FORMATOREPORTE = req.query.FORMATOREPORTE
 var TIPOREPORTE = req.query.TIPOREPORTE
 var FECHAREPORTE = req.query.FECHAREPORTE
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
    connection.execute('INSERT INTO  REPORTE (ID_REPORTE, FORMATO_REPORTE, TIPO_REPORTE,FECHA_REPORTE )  VALUES (:IDREPORTE,:FORMATOREPORTE,:TIPOREPORTE ,:FECHAREPORTE )',[IDREPORTE,FORMATOREPORTE,TIPOREPORTE ,FECHAREPORTE  ], {
      autoCommit:true,
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
app.get('/add_PROPIEDAD', function (req, res,next) {
  "use strict";
 var IDPROPIEDAD = req.query.IDPROPIEDAD
 var NOMBREPROPIEDAD = req.query.NOMBREPROPIEDAD
 var CANTIDADHECTARIAS = req.query.CANTIDADHECTARIAS
 var IDTIPOPRODUCCION = req.query.IDTIPOPRODUCCION
 var IDDOMICILIO = req.query.IDDOMICILIO
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
    connection.execute('INSERT INTO PROPIEDAD (ID_PROPIEDAD, NOMBRE_PROPIEDAD, CANTIDAD_HECTARIAS,ID_TIPO_PRODUCCION, ID_DOMICILIO) VALUES (:IDPROPIEDAD,:NOMBREPROPIEDAD,:CANTIDADHECTARIAS,:IDTIPOPRODUCCION ,:IDDOMICILIO )',[IDPROPIEDAD,NOMBREPROPIEDAD,CANTIDADHECTARIAS,IDTIPOPRODUCCION ,IDDOMICILIO ], {
      autoCommit:true,
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
app.get('/add_SIEMBRA', function (req, res,next) {
  "use strict";
 var IDSIEMBRA = req.query.IDSIEMBRA
 var TIPOSIEMBRA = req.query.TIPOSIEMBRA
 var DESCRIPCION = req.query.DESCRIPCION
 var IDREPORTE = req.query.IDREPORTE
 var IDPROPIEDAD = req.query.IDPROPIEDAD
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
    connection.execute('INSERT INTO SIEMBRA (ID_SIEMBRA, TIPO_SIEMBRA, DESCRIPCION,ID_REPORTE, ID_PROPIEDAD) VALUES (:IDSIEMBRA,:TIPOSIEMBRA,:DESCRIPCION,:IDREPORTE ,:IDPROPIEDAD )',[IDSIEMBRA,TIPOSIEMBRA,DESCRIPCION,IDREPORTE ,IDPROPIEDAD ], {
      autoCommit:true,
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
app.get('/add_ANIMAL', function (req, res,next) {
  "use strict";
 var NUMEROSERIE = req.query.NUMEROSERIE
 var NOMBREANIMAL = req.query.NOMBREANIMAL
 var PESO = req.query.PESO
 var IDVACSERIE = req.query.IDVACSERIE
 var IDTIPOANIMAL = req.query.IDTIPOANIMAL
 var CRIAS = req.query.CRIAS
 var IDTIPOPRODANIMAL = req.query.IDTIPOPRODANIMAL
 var IDENFERMEDAD = req.query.IDENFERMEDAD
 var IDREPORTE = req.query.IDREPORTE
 var IDPROPIEDAD = req.query.IDPROPIEDAD
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
    connection.execute('INSERT INTO ANIMAL (NUMERO_SERIE, NOMBRE_ANIMAL, PESO,ID_VAC_SERIE, ID_TIPO_ANIMAL,CRIAS,ID_TIPO_PROD_ANIMAL,ID_ENFERMEDAD,ID_REPORTE,ID_PROPIEDAD) VALUES (:NUMEROSERIE, :NOMBREANIMAL, :PESO,:IDVACSERIE, :IDTIPOANIMAL,:CRIAS,:IDTIPOPRODANIMAL,:IDENFERMEDAD,:IDREPORTE,:IDPROPIEDAD )',[NUMEROSERIE,NOMBREANIMAL,PESO,IDVACSERIE,IDTIPOANIMAL,CRIAS,IDTIPOPRODANIMAL,IDENFERMEDAD,IDREPORTE,IDPROPIEDAD ], {
      autoCommit:true,
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
app.get('/add_PERSONA', function (req, res,next) {
  "use strict";
 var RUT = req.query.RUT
 var DVRUT = req.query.DVRUT
 var PNOMBRE = req.query.PNOMBRE
 var SNOMBRE = req.query.SNOMBRE
 var PAPELLIDO = req.query.PAPELLIDO
 var SAPELLIDO = req.query.SAPELLIDO
 var FECHANACIMIENTO = req.query.FECHANACIMIENTO
 var IDTIPOUSUARIO = req.query.IDTIPOUSUARIO
 var IDDOMICILIO = req.query.IDDOMICILIO
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
    connection.execute('INSERT INTO PERSONA (RUT, DV_RUT, PNOMBRE,SNOMBRE, PAPELLIDO,SAPELLIDO,FECHA_NACIMIENTO,ID_TIPO_USUARIO,ID_DOMICILIO)  VALUES (:RUT, :DVRUT, :PNOMBRE,:SNOMBRE, :PAPELLIDO,:SAPELLIDO,:FECHANACIMIENTO,:IDTIPOUSUARIO,:IDDOMICILIO )',[RUT, DVRUT, PNOMBRE,SNOMBRE, PAPELLIDO,SAPELLIDO,FECHANACIMIENTO,IDTIPOUSUARIO,IDDOMICILIO ], {
      autoCommit:true,
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
app.get('/add_TProduccion', function (req, res,next) {
  "use strict";
 var IDTIPOPRODUCCION = req.query.IDTIPOPRODUCCION
 var TIPOPRODUCCION = req.query.TIPOPRODUCCION
 var DESCRIPCION = req.query.DESCRIPCION

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
    connection.execute('INSERT INTO TIPO_PRODUCCION (ID_TIPO_PRODUCCION, TIPO_PRODUCCION, DESCRIPCION )  VALUES (:IDTIPOPRODUCCION, :TIPOPRODUCCION, :DESCRIPCION)',[IDTIPOPRODUCCION, TIPOPRODUCCION, DESCRIPCION], {
      autoCommit:true,
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
app.get('/add_userapp', function (req, res,next) {
  "use strict";
 var NOMBRE = req.query.NOMBRE
 var PAPELLIDO = req.query.PAPELLIDO
 var SAPELLDO = req.query.SAPELLDO
 var EMAIL = req.query.EMAIL
 var PASS = req.query.PASS
 var PAIS = req.query.PAIS
 var COMUNA = req.query.COMUNA
 var REGION = req.query.REGION
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
    connection.execute('INSERT INTO USERLOGIN (NOMBRE,PAPELLIDO,SAPELLDO ,EMAIL,PASS ,PAIS , COMUNA,REGION )  VALUES (:NOMBRE,:PAPELLIDO,:SAPELLDO ,:EMAIL,:PASS ,:PAIS ,:COMUNA,:REGION )',[NOMBRE,PAPELLIDO,SAPELLDO ,EMAIL,PASS ,PAIS , COMUNA,REGION  ], {
      autoCommit:true,
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


///--------------------------MENSAJE POR TERMINAL PARA PROBAR SI FUNCIONA EL SERVIDOR
  app.listen(8201, 'localhost', function(){
      console.log("EL SERVIDOR ESTA ESCUCHANDO DESDE EL PUERTO: 8201");
  });

