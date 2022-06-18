const sequelize = require('sequelize-oracle');
const Sequelize = require('sequelize-oracle');



//////////
module.exports = (sequelize, Datatypes)=>{
    return sequelize.define("REGION", {
        ID_REGION:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        NOMBRE_REGION: {
            type: Sequelize.STRING,
            require: true,
            allowNull: false,
            len: [6, 50]
        },
        DESCRIPCION: {
            type: Sequelize.STRING,
            require: true,
            allowNull: false,
            len: [6, 100]
            
        }
    },{
        underscored:true,
        paranoid:true
    })
}





