const{create} = require('../servicio/tipo_usuario/create');

async function _create(tipo_usuario){
    return await createa(tipo_usuario);
}


module.exports = {
    _create
}