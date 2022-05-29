var express = require("express");
var app = express();
var bodyparser = require('body-parser');
var oracledb = require('oracledb');
var password = '123abc' ;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true

}));

var connAttrs = {
    user: "DESA",
    password: password,
    connectString: "localhost:1521/xepdb1"
  }
app.get('/cow_sow', (req,res)=>{
 //   let result = await connection.execute("SELECT NOMBRE_PAIS FROM PAIS"); // TEST PARA VER LAS TABLAS DE LA BASE DE DATOS
   // console.log(result.rows); 
    res.send([{message: 'funciona'}]);


    
});
  app.listen(4201, 'localhost', function(){
      console.log("EL SERVIDOR ESRA ESCUCHANDO DESDE EL PUERTO: 4201");
  })
  
