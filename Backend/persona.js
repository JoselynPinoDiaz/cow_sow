const { Router } = require('express');
const router = Router();
const BD = require('../base_datos/configbd');

//READ
router.all('/prueba', async (req, res) => {
    sql = "SELECT * FROM PRUEBA";

    let result = await BD.Open(sql, [], false);
    Prueba = [];

    result.rows.map(prueba => {
        let pruebaSchema = {
            "ID_TIPO_USUARIO": prueba[0],
            "PNOMBRE": prueba[1],
            "SNOMBRE": prueba[2]
        }

        Prueba.push(pruebaSchema);
    })

    res.json(Prueba);
})

//CREATE

router.post('/addPrueba', async (req, res) => {
    const { ID_TIPO_USUARIO, PNOMBRE, SNOMBRE } = req.body;

    sql = "INSERT INTO PRUEBA(ID_TIPO_USUARIO, PNOMBRE, SNOMBRE) values (:ID_TIPO_USUARIO,:PNOMBRE,:SNOMBRE)";

    await BD.Open(sql, [ID_TIPO_USUARIO, PNOMBRE, SNOMBRE], true);

    res.status(200).json({
        "ID_TIPO_USUARIO": ID_TIPO_USUARIO,
        "PNOMBRE": PNOMBRE,
        "SNOMBRE": SNOMBRE
    })
})

//UPDATE
router.put("/updateUser", async (req, res) => {
    const { codu, username, firstname, lastname } = req.body;

    sql = "update person set username=:username, firstname=:firstname, lastname=:lastname where codu=:codu";

    await BD.Open(sql, [username, firstname, lastname,codu], true);

    res.status(200).json({
        "codu": codu,
        "username": username,
        "firstname": firstname,
        "lastname": lastname
    })

})


//DELETE
router.delete("/deleteUser/:codu", async (req, res) => {
    const { codu } = req.params;

    sql = "update person set state=0 where codu=:codu";

    await BD.Open(sql, [codu], true);

    res.json({ "msg": "Usuario Eliminado" })
})


module.exports = Router;

////MENSAJE POR TERMINAL PARA PROBAR SI FUNCIONA EL SERVIDOR
app.listen(9001, 'localhost', function(){
    console.log("EL SERVIDOR ESTA ESCUCHANDO DESDE EL PUERTO: 9001");
})