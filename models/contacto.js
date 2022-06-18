const sequelize = require('sequelize-oracle');
const Sequelize = require('sequelize-oracle');

module.exports = (sequelize, Datatypes)=>{
    return sequelize.define("CONTACTO", {
        ID_CONTACTO:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        NOMBRE: {
            type: Sequelize.INTEGER,
            require: true,
            allowNull: false,
            len: [50]
        },
        EMAIL: {
            type: Sequelize.STRING,
            require: true,
            allowNull: false,
            len: [8, 100]
        },
        TELEFONO: {
            type: Sequelize.INTEGER,
            require: true,
            allowNull: false,
            len: [10]
        },
        DESCRIPCION: {
            type: Sequelize.STRING,
            require: true,
            allowNull: false,
            len: [8, 100]
        }
    },{
        underscored:true,
        paranoid:true
    })
}