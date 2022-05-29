const express = require('express')

const oracledb = require('oracledb');

const app = express();

const port = 3000;

//var password = 'DESA';

var password = '123abc';

async function selectAllCOUNTRY(req, res) {

try {

connection = await oracledb.getConnection({

user: "DESA",

password: password,

connectString: "localhost:1521/xepdb1"

});

console.log('connected to database');

// run query to get all COUNTRY

result = await connection.execute(`SELECT NOMBRE_PAIS FROM PAIS`);

} catch (err) {

//send error message

return res.send(err.message);

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

if (result.rows.length == 0) {

//query return zero employees

return res.send('query send no rows');

} else {

//send all employees

return res.send(result.rows);

}

}

}

//get /employess

app.get('/pais', function (req, res) {

selectAllCOUNTRY(req, res);

})

app.listen(port, () => console.log("nodeOracleRestApi app listening on port %s!", port))


