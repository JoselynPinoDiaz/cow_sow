const express = require('express')

const oracledb = require('oracledb');

const app = express();

const port = 3000;

<<<<<<< HEAD
var password = '123abc';
=======
var password = 'DESA';
>>>>>>> 6434ac5580cf590b443f0432171ff3cfb12516bc

async function selectAllEmployees(req, res) {

try {

connection = await oracledb.getConnection({

user: "DESA",

password: password,

connectString: "localhost:1521/xepdb1"

});

console.log('connected to database');

// run query to get all employees

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

selectAllEmployees(req, res);

})

app.listen(port, () => console.log("nodeOracleRestApi app listening on port %s!", port))