const { Router } = require('express');
const router = Router();
const BD = require('../base_datos/configbd');

//READ
router.get('/ganado', async (req, res) => {
    sql = "SELECT * FROM ANIMALES";

    let result = await BD.Open(sql, [], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "codu": user[0],
            "username": user[1],
            "firstname": user[2],
            "lastname": user[3]
        }

        Users.push(userSchema);
    })

    res.json(Users);
})

//CREATE

router.post('/addUser', async (req, res) => {
    const { username, firstname, lastname } = req.body;

    sql = "insert into person(username,firstname,lastname) values (:username,:firstname,:lastname)";

    await BD.Open(sql, [username, firstname, lastname], true);

    res.status(200).json({
        "username": username,
        "firstname": firstname,
        "lastname": lastname
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