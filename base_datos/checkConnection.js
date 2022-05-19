const oracledb = require('oracledb');
// hr schema password
var password = 'DESA' 
// checkConnection asycn function
async function checkConnection() {
  try {
    connection = await oracledb.getConnection({
        user: "DESA",
        password: password,
        connectString: "localhost:1521/xepdb1"
    });
   //let result = await connection.execute("SELECT * FROM PAIS"); // TEST PARA VER LAS TABLAS DE LA BASE DE DATOS
   //console.log(result.rows); // ver por pantalla la tabla pais
    console.log('connected to database');
  } catch (err) {
    console.error(err.message);
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close(); 
        console.log('close connection success');
      } catch (err) {
        console.error(err.message);
      }
    }
  }
}

checkConnection();




