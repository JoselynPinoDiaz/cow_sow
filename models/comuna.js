const sequelize = require('sequelize-oracle');
const Sequelize = require('sequelize-oracle');

////////
module.exports = (sequelize, Datatypes)=>{
    return sequelize.define("COMUNA", {
        ID_COMUNA:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        NOMBRE_COMUNA: {
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