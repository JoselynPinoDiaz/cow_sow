const db = require('../../models');
const bcrypt = require('bcrypt');


async function create (tipo_usuario){
    if(!tipo_usuario.EMAIL) throw new Error('email de usuario no encontrada....')
    if(!tipo_usuario.PASSWORD) throw new Error('Contraseña de usuario no encontrada....')

    return await db.tipo_usuario,create({
        ...tipo_usuario,
            PASSWORD: bcrypt.hashSync(tipo_usuario.PASSWORD, 10)
    
    });
}

module.exports = {
    create
}