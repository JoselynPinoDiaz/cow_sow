var express = require("express"); //npm install express npm body-parse npm cors npm oracledb
var app = express();
var router  = express.Router();
var bodyparser = require('body-parser'); //para el json
var oracledb = require('oracledb');
var  asyncScheduler  = require("rxjs");
var cors = require('cors');
var  autoCommit  = require("oracledb");
const { opendir } = require("fs");
app.use(cors());

//variable de pass bd - manu: DESA
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

  async function Open(sql, binds, autoCommit) {
    let cnn = await oracledb.getConnection(connAttrs);
    let result = await cnn.execute(sql, binds, {autoCommit});
    cnn.release();
    return result;
}

exports.Open = Open;

//** METODO PARA PROBAR CONEXION DE LA CONEXION CON LA BD */

//** METODO ADMINISTRADOR CRUD GET POST UPDATE DELETE */
app.post('/postAdmin', function (req, res) {
    "use strict";
    oracledb.getConnection(connAttrs, function (err, connection) {
        if (err) {
            // Error connecting to DB
            res.set('Content-Type', 'application/json').status(500).send(JSON.stringify({
                status: 500,
                message: "Error connecting to DB",
                detailed_message: err.message
            }));
            return;
        }
        connection.execute("INSERT INTO USUARIO_ADMIN VALUES " +
        "(:ID_ADMIN,:RUT_ADMIN,:ROL_ADMIN,:PNOMBRE,:SNOMBRE,:PAPELLIDO,:SAPELLIDO,:EMAIL,:CLAVE,:FECHA_NACIMIENTO,:COMUNA_ID,:REGION_ID,:PAIS_ID) ",
             [req.body.ID_ADMIN,req.body.RUT_ADMIN,req.body.ROL_ADMIN, 
                            req.body.PNOMBRE,req.body.SNOMBRE,req.body.PAPELLIDO,req.body.SAPELLIDO,req.body.EMAIL,
                            req.body.CLAVE,req.body.FECHA_NACIMIENTO,req.body.COMUNA_ID,req.body.REGION_ID,req.body.PAIS_ID], {
                                
                autoCommit: true,
                outFormat: oracledb.OBJECT // Return the result as Object
                
            },
            function (err, result) {
                if (err) {
                    // Error
                    res.set('Content-Type', 'application/json');
                    res.status(400).send(JSON.stringify({
                        status: 400,
                        message: err.message.indexOf("ORA-00001") > -1 ? "User already exists" : "Input Error",
                        detailed_message: err.message
                    }));
                } else {
                    res.header('Access-Control-Allow-Origin','*');
                    res.header('Access-Control-Allow-Headers','Content-Type');
                    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
                    // Successfully created the resource
                    res.status(200).set('Location', '/postAdmin/' + req.body.ID_ADMIN).end();

                }
                // Release the connection
                connection.release(
                    function (err) {
                        if (err) {
                            console.error(err.message);
                        } else {
                            console.log("POST /postAdmin : Connection released");
                        }
                    });
            });
    });
});


//** FINAL DE LOS  METODOS ADMINISTRADOR */

//** METODO PROPIEDAD CRUD GET POST UPDATE DELETE */
 //**  Http method: GET */
//**  GET a new PROPIEDAD */
app.get('/GetPropiedad', function (req, res) {
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

  //**  Http method: POST */
//**  Creates a new PROPIEDAD */
app.post('/postPropiedad', function (req, res) {
    "use strict";
    oracledb.getConnection(connAttrs, function (err, connection) {
        if (err) {
            // Error connecting to DB
            res.set('Content-Type', 'application/json').status(500).send(JSON.stringify({
                status: 500,
                message: "Error connecting to DB",
                detailed_message: err.message
            }));
            return;
        }
        connection.execute("INSERT INTO PROPIEDAD VALUES " +
            "(:ID_PROPIEDAD,:NOMBRE_PROPIEDAD ,:DIRECCION, :HECTAREAS , :ID_COMUNA ) ",
              [req.body.ID_PROPIEDAD, req.body.NOMBRE_PROPIEDAD,req.body.DIRECCION,
                            req.body.HECTAREAS, req.body.ID_COMUNA], {
                                
                autoCommit: true,
                outFormat: oracledb.OBJECT // Return the result as Object
                
            },
            function (err, result) {
                if (err) {
                    // Error
                    res.set('Content-Type', 'application/json');
                    res.status(400).send(JSON.stringify({
                        status: 400,
                        message: err.message.indexOf("ORA-00001") > -1 ? "User already exists" : "Input Error",
                        detailed_message: err.message
                    }));
                } else {
                    res.header('Access-Control-Allow-Origin','*');
                    res.header('Access-Control-Allow-Headers','Content-Type');
                    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
                    // Successfully created the resource
                    res.status(201).set('Location', '/postEmpleado/' + req.body.ID_PROPIEDAD).end();

                }
                // Release the connection
                connection.release(
                    function (err) {
                        if (err) {
                            console.error(err.message);
                        } else {
                            console.log("POST /postEmpleado : Connection released");
                        }
                    });
            });
    });
});


//** FINAL DE LOS  METODOS PROPIEDAD */


//** METODO EMPLEADO CRUD GET POST UPDATE DELETE */

app.get('/getEmpleados', function (req, res) {
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
        connection.execute("SELECT * FROM PERSONA ", {}, {
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

  // Http method: POST
// Creates a new EMPLEADOS ID_TIPO_USUARIO,TIPO_USUARIO,EMAIL,CLAVE, DESCRIPCION
app.post('/postEmpleado', function (req, res) {
    "use strict";
    
    
    oracledb.getConnection(connAttrs, function (err, connection) {
        if (err) {
            // Error connecting to DB
            res.set('Content-Type', 'application/json').status(500).send(JSON.stringify({
                status: 500,
                message: "Error connecting to DB",
                detailed_message: err.message
            }));
            return;
        }
        connection.execute("INSERT INTO PERSONA VALUES " +
            "(:RUT_PERSONA, :PNOMBRE, :SNOMBRE, :PAPELLIDO," +
            ":SAPELLIDO,:FECHA_NACIMIENTO,:TIPO_USUARIO,:EMAIL,:CLAVE,:ID_PROPIEDAD) ", 
            [req.body.RUT_PERSONA, req.body.PNOMBRE,req.body.SNOMBRE,req.body.PAPELLIDO ,
                            req.body.SAPELLIDO, req.body.FECHA_NACIMIENTO,req.body.TIPO_USUARIO,req.body.EMAIL, req.body.CLAVE,req.body.ID_PROPIEDAD], {
                                
                autoCommit: true,
                outFormat: oracledb.OBJECT // Return the result as Object
                
            },
            function (err, result) {
                if (err) {
                    // Error
                    res.set('Content-Type', 'application/json');
                    res.status(400).send(JSON.stringify({
                        status: 400,
                        message: err.message.indexOf("ORA-00001") > -1 ? "User already exists" : "Input Error",
                        detailed_message: err.message
                    }));
                } else {
                    res.header('Access-Control-Allow-Origin','*');
                    res.header('Access-Control-Allow-Headers','Content-Type');
                    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
                    // Successfully created the resource
                    res.status(201).set('Location', '/postEmpleado/' + req.body.RUT_PERSONA).end();

                }
                // Release the connection
                connection.release(
                    function (err) {
                        if (err) {
                            console.error(err.message);
                        } else {
                            console.log("POST /postEmpleado : Connection released");
                        }
                    });
            });
    });
});

   // Http method: DELETE
//** ELIMINAR UN  EMPLEADO */
////-----------------METODOS DELETE FUNCIONA
app.delete('/deleteEmpleado/:id', function (req, res,next) {
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
        connection.execute('DELETE FROM PERSONA where RUT_PERSONA =:id', [ req.params.id], {
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

//** FINAL DE LOS  METODOS EMPLEADOS */


//** METODO GANADO CRUD GET POST UPDATE DELETE */
///consulta GET tabla GANADO
app.get('/getGanado', function (req, res) {
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
        connection.execute("SELECT * FROM ANIMAL ", {}, {
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



app.get('/getGanadoId', function (req, res,next) {
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
        connection.execute('SELECT * FROM ANIMAL where NUMERO_SERIE =:id', [ req.params.id], {
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


///consulta POST tabla GANADO
app.post('/postGanado', function (req, res) {
    "use strict";
    
    
    oracledb.getConnection(connAttrs, function (err, connection) {
        if (err) {
            // Error connecting to DB
            res.set('Content-Type', 'application/json').status(500).send(JSON.stringify({
                status: 500,
                message: "Error connecting to DB",
                detailed_message: err.message
            }));
            return;
        }
        connection.execute("INSERT INTO ANIMAL VALUES " +
            "(:NUMERO_SERIE,:TIPO_ANIMAL,:RAZA,:PESO,:ANOS_EDAD,:MESES_EDAD,:CRIAS,:TIPO_PRODUCCION,:FECHA,:PRECIO_COMPRA,:PRECIO_VENTA,:VACUNA,:PRECIO_VACUNA,:ENFERMEDAD,:MEDICAMENTO,:PRECIO_MEDICAMENTO,:ID_EVENTO,:ID_PROPIEDAD) ",
              [req.body.NUMERO_SERIE, req.body.TIPO_ANIMAL ,req.body.RAZA,req.body.PESO , req.body.ANOS_EDAD ,req.body.MESES_EDAD,
                req.body.CRIAS,req.body.TIPO_PRODUCCION , req.body.FECHA ,req.body.PRECIO_COMPRA,req.body.PRECIO_VENTA, req.body.VACUNA,
                req.body.PRECIO_VACUNA,req.body.ENFERMEDAD, req.body.MEDICAMENTO, req.body.PRECIO_MEDICAMENTO ,req.body.ID_EVENTO,req.body.ID_PROPIEDAD], {
                                
                autoCommit: true,
                outFormat: oracledb.OBJECT // Return the result as Object
                
            },
            function (err, result) {
                if (err) {
                    // Error
                    res.set('Content-Type', 'application/json');
                    res.status(400).send(JSON.stringify({
                        status: 400,
                        message: err.message.indexOf("ORA-00001") > -1 ? "User already exists" : "Input Error",
                        detailed_message: err.message
                    }));
                } else {
                    res.header('Access-Control-Allow-Origin','*');
                    res.header('Access-Control-Allow-Headers','Content-Type');
                    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
                    // Successfully created the resource
                    res.status(201).set('Location', '/postGanado/' + req.body.NUMERO_SERIE).end();

                }
                // Release the connection
                connection.release(
                    function (err) {
                        if (err) {
                            console.error(err.message);
                        } else {
                            console.log("POST /postGanado : Connection released");
                        }
                    });
            });
    });
});

   // Http method: DELETE
//** ELIMINAR UN  GANADO*/
////-----------------METODOS DELETE FUNCIONA
app.delete('/deleteGanado/:id', function (req, res,next) {
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
        connection.execute('DELETE FROM ANIMAL where NUMERO_SERIE =:id', [ req.params.id], {
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
  

//** FINAL DE LOS  METODOS GANADO */


//** METODO SIEMBRA CRUD GET POST UPDATE DELETE */
///consulta get tabla SIEMBRA
app.get('/getSiembra', function (req, res) {
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



///consulta POST tabla sIEMBRA
app.post('/postSiembra', function (req, res) {
    "use strict";
    
    
    oracledb.getConnection(connAttrs, function (err, connection) {
        if (err) {
            // Error connecting to DB
            res.set('Content-Type', 'application/json').status(500).send(JSON.stringify({
                status: 500,
                message: "Error connecting to DB",
                detailed_message: err.message
            }));
            return;
        }
        connection.execute("INSERT INTO SIEMBRA VALUES " +
            "(:ID_SIEMBRA,:TIPO_SIEMBRA,:TIPO_FRU_VER,:COLOR,:VARIEDAD,:CANTIDAD,:METROS_OCUPADOS,:FECHA,:PRECIO_COMPRA,:PRECIO_VENTA,:FERTILIZANTE,:PRECIO_FERTILIZANTE,:FUMIGACION,:PRECIO_FUMIGACION) ",
              [req.body.ID_SIEMBRA, req.body.TIPO_SIEMBRA ,req.body.TIPO_FRU_VER,req.body.COLOR,req.body.VARIEDAD, req.body.CANTIDAD ,req.body.METROS_OCUPADOS,
                req.body.FECHA,req.body.PRECIO_COMPRA , req.body.PRECIO_VENTA ,req.body.FERTILIZANTE,req.body.PRECIO_FERTILIZANTE, req.body.FUMIGACION,
                req.body.PRECIO_FUMIGACION], {
                                
                autoCommit: true,
                outFormat: oracledb.OBJECT // Return the result as Object
                
            },
            function (err, result) {
                if (err) {
                    // Error
                    res.set('Content-Type', 'application/json');
                    res.status(400).send(JSON.stringify({
                        status: 400,
                        message: err.message.indexOf("ORA-00001") > -1 ? "User already exists" : "Input Error",
                        detailed_message: err.message
                    }));
                } else {
                    res.header('Access-Control-Allow-Origin','*');
                    res.header('Access-Control-Allow-Headers','Content-Type');
                    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
                    // Successfully created the resource
                    res.status(201).set('Location', '/postEmpleado/' + req.body.NUMERO_SERIE).end();

                }
                // Release the connection
                connection.release(
                    function (err) {
                        if (err) {
                            console.error(err.message);
                        } else {
                            console.log("POST /postEmpleado : Connection released");
                        }
                    });
            });
    });
});

   // Http method: DELETE
//** ELIMINAR UN  SIEMBRE */
////-----------------METODOS DELETE FUNCIONA
app.delete('/deleteSiembra/:id', function (req, res,next) {
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
        connection.execute('DELETE FROM SIEMBRA where ID_SIEMBRA =:id', [ req.params.id], {
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
  
//** FINAL DE LOS  METODOS SIEMBRA */

//** METODO CONTACTO CRUD GET POST UPDATE DELETE */
///consulta get tabla CONTACTOS
app.get('/getContacto', function (req, res) {
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
        connection.execute("select ID_CONTACTO, NOMBRE, EMAIL, TELEFONO, DESCRIPCION from CONTACTO WHERE ID_CONTACTO = ID_CONTACTO", {}, {
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

///consulta get tabla CONTACTOS Lista Contactos
app.get('/getContactoid/', function (req, res) {
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
        connection.execute("SELECT ID_CONTACTO,NOMBRE,EMAIL,TELEFONO,DESCRIPCION FROM CONTACTO WHERE ID_CONTACTO =ID_CONTACTO", {}, {
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

   // Http method: POST
//** CREAR UN NEW CONTACTO */
app.post('/postContacto', function (req, res) {
    "use strict";
    
    
    oracledb.getConnection(connAttrs, function (err, connection) {
        if (err) {
            // Error connecting to DB
            res.set('Content-Type', 'application/json').status(500).send(JSON.stringify({
                status: 500,
                message: "Error connecting to DB",
                detailed_message: err.message
            }));
            return;
        }
        connection.execute("INSERT INTO CONTACTO VALUES " +
            "(:ID_CONTACTO, :NOMBRE, :EMAIL, :TELEFONO," +
            ":DESCRIPCION) ", [req.body.ID_CONTACTO, req.body.NOMBRE,
                            req.body.EMAIL, req.body.TELEFONO,req.body.DESCRIPCION], {
                                
                autoCommit: true,
                outFormat: oracledb.OBJECT // Return the result as Object
                
            },
            function (err, result) {
                if (err) {
                    // Error
                    res.set('Content-Type', 'application/json');
                    res.status(400).send(JSON.stringify({
                        status: 400,
                        message: err.message.indexOf("ORA-00001") > -1 ? "User already exists" : "Input Error",
                        detailed_message: err.message
                    }));
                } else {
                    res.header('Access-Control-Allow-Origin','*');
                    res.header('Access-Control-Allow-Headers','Content-Type');
                    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
                    // Successfully created the resource
                    res.status(200).set('Location', '/postContacto/' + req.body.ID_CONTACTO).end();

                }
                // Release the connection
                connection.release(
                    function (err) {
                        if (err) {
                            console.error(err.message);
                        } else {
                            console.log("POST /postContacto : Connection released");
                        }
                    });
            });
    });
});

   // Http method: DELETE
//** ELIMINAR UN  CONTACTO */
////-----------------METODOS DELETE FUNCIONA
app.delete('/deleteContacto/:id', function (req, res,next) {
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
        connection.execute('DELETE FROM CONTACTO where ID_CONTACTO =:id', [ req.params.id], {
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


//Http method: UPDATE
//** ACTULIZAR UN NEW CONTACTO */
app.put('/update/:id', (req, res) => {
    oracledb.getConnection(connAttrs)
    .then((c) => {
        connection = c;
        return connection.execute("UPDATE CONTACTO SET ID_CONTACTO =:ID_CONTACTO, NOMBRE = :NOMBRE, EMAIL = :EMAIL, TELEFONO = :TELEFONO, DESCRIPCION = :DESCRIPCION WHERE ID_CONTACTO= :ID_CONTACTO",
        {
            ID_CONTACTO: req.params.ID_CONTACTO,
            NOMBRE: req.body.NOMBRE,
            EMAIL: req.body.EMAIL,
            TELEFONO: req.body.TELEFONO,
            DESCRIPCION: req.body.DESCRIPCION,
        });
    }).then(() => {
        res.status(200).json("User successfully updated! ID: "+ req.params.ID_CONTACTO);            
    
    }).catch((error)=>{
        res.status(500).json({ message: error.message || "Some error occurred!" });
    });
});

//UPDATE FUNCIONA
app.put("/updateContacto/:id", async (req, res) => {
    const {ID_CONTACTO,NOMBRE, EMAIL,TELEFONO, DESCRIPCION} = req.body;

    sql = "update CONTACTO set ID_CONTACTO=:ID_CONTACTO,NOMBRE=:NOMBRE, EMAIL=:EMAIL, TELEFONO=:TELEFONO, DESCRIPCION=:DESCRIPCION where ID_CONTACTO=:ID_CONTACTO";

    await Open(sql, [ID_CONTACTO,NOMBRE,EMAIL,TELEFONO, DESCRIPCION], true);

    res.status(200).json({
        "ID_CONTACTO":ID_CONTACTO,
        "NOMBRE":NOMBRE,
        "EMAIL": EMAIL,
        "TELEFONO":TELEFONO,
        "DESCRIPCION":DESCRIPCION
    });
    

})





//** FINAL DE LOS  METODOS CONTACTOS */










//** METODO PERFIL CRUD GET POST UPDATE DELETE */
///consulta get tabla PERSONA
app.get('/getPerfil', function (req, res) {
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

//** METODO EVENTO CRUD GET POST UPDATE DELETE */
///consulta get tabla EVENTO
app.get('/getEvento', function (req, res) {
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
        connection.execute("select * from EVENTO", {}, {
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


  ///METODO PARA PROBAR CONEXION DE LA CONEXION CON LA BD
/////LOGIN
app.post('/LOGIN', function (req, res) {
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
        connection.execute("SELECT ROL_ADMIN,EMAIL,CLAVE FROM USUARIO_ADMIN;", {}, {
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

app.get('/',function (req, res) {

    res.send([{ message: 'funciona' }]);
  });

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
        connection.execute("select * from PAIS", {}, {
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
      connection.execute("select * from COMUNA", {}, {
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

//////--------------METODOS POST------------------///////////////////
app.get('/addvacuna', function (req, res,next) {
  "use strict";
    var NOMBRE_VACUNA = req.params.NOMBRE_VACUNA;
    var DESCRIPCION = req.params.DESCRIPCION ;
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
          connection.execute("INSERT INTO PAIS ( NOMBRE_VACUNA, DESCRIPCION ) VALUES ( :NOMBRE_VACUNA, :DESCRIPCION) ", [NOMBRE_VACUNA, DESCRIPCION], {
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
///////////////////////////////////////////////////////////////////////
////AGREEGAR
  
//CREATE
app.post('/addContacto', async (req, res) => {
    
    const { EMAIL,CLAVE, DESCRIPCION,TIPO_USUARIO} = req.body;

    sql = "INSERT INTO TIPO_USUARIO( EMAIL,CLAVE, DESCRIPCION,TIPO_USUARIO) values ( :EMAIL,:CLAVE, :DESCRIPCION, :TIPO_USUARIO)";

    await Open(sql, [ EMAIL,CLAVE, DESCRIPCION,TIPO_USUARIO], true);
    res.header('Access-Control-Allow-Origin','*');
                    res.header('Access-Control-Allow-Headers','Content-Type');
                    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
    res.status(200).json({
        "EMAIL": EMAIL,
        "CLAVE":CLAVE,
        "DESCRIPCION":DESCRIPCION,
        "TIPO_USUARIO":TIPO_USUARIO
    })
    })






/////////////////////////////////////////////////////////////////
// Http method: DELETE
// URI        : /userprofiles/:USER_NAME
// Delete the profile of user given in :USER_NAME
app.delete('/user_profiles/:ID', function (req, res) {
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

        connection.execute("UPDATE FROM CONTACTO  WHERE ID_CONTACTO =:ID_CONTACTO", [req.params.ID_CONTACTO], {
            autoCommit: true,
            outFormat: oracledb.OBJECT
        }, function (err, result) {
            if (err || result.rowsAffected === 0) {
                // Error
                res.set('Content-Type', 'application/json');
                res.status(400).send(JSON.stringify({
                    status: 400,
                    message: err ? "Input Error" : "User doesn't exist",
                    detailed_message: err ? err.message : ""
                }));
            } else {
                // Resource successfully deleted. Sending an empty response body. 
                res.status(200).end();
            }
            // Release the connection
            connection.release(
                function (err) {
                    if (err) {
                        console.error(err.message);
                    } else {
                        console.log("DELETE /user_profiles/" + res.params.ID_CONTACTO + " : Connection released");
                    }
                });

        });
    });
});




app.delete('/deleteco/:id', function (req, res,next) {
    var id = req.query.CONTACTO;
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
          connection.execute("DELETE FROM CONTACTO WHERE ID_CONTACTO =:id", [id], {
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





//DELETE fUNCIONA
app.delete("/deleteUser/:id", async (req, res) => {
    const { id} = req.params;

    sql = "DELETE FROM CONTACTO WHERE ID_CONTACTO =:id";

    await Open(sql, [id], true);

    res.json({ "msg": "Usuario Eliminado" })
}); 

//DELETE PROPIEDAD fUNCIONA







///MENSAJE POR TERMINAL PARA PROBAR SI FUNCIONA EL SERVIDOR
app.listen(8201, 'localhost', function(){
      console.log("EL SERVIDOR ESTA ESCUCHANDO DESDE EL PUERTO: 8201");
  });

