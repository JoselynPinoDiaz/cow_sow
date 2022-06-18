const sequelize = require('sequelize-oracle');
const Sequelize = require('sequelize-oracle');

module.exports = (sequelize, Datatypes)=>{
    return sequelize.define("TIPO_USUARIO", {
        ID_TIPO_USUARIO:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        TIPO_USUARIO: {
            type: Sequelize.INTEGER,
            require: true,
            allowNull: false,
            len: [20]
        },
        EMAIL: {
            type: Sequelize.STRING,
            require: true,
            allowNull: false,
            len: [8, 100]
        },
        CONFIRMAR_EMAIL: {
            type: Sequelize.STRING,
            require: true,
            allowNull: false,
            len: [8, 100]
        },
        PASSWORD: {
            type: Sequelize.INTEGER,
            require: true,
            allowNull: false,
            len: [8]
        },
        CONFIRMAR_PASSWORD: {
            type: Sequelize.INTEGER,
            require: true,
            allowNull: false,
            len: [8]
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