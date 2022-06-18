const sequelize = require('sequelize-oracle');
const Sequelize = require('sequelize-oracle');


module.exports = (sequelize, Datatypes)=>{
    return sequelize.define("PERSONA", {
        RUT:{
            type: Sequelize.INTEGER,
            require: true,
            allowNull: false,
            primaryKey: true,
            len: [6]
        },
        DV_RUT: {
            type: Sequelize.INTEGER,
            require: true,
            allowNull: false,
            len: [2]
        },
        PNOMBRE: {
            type: Sequelize.STRING,
            require: true,
            allowNull: false,
            len: [20]
        },
        SNOMBRE: {
            type: Sequelize.STRING,
            require: true,
            allowNull: false,
            len: [20]
        },
        PAPELLIDO: {
            type: Sequelize.STRING,
            require: true,
            allowNull: false,
            len: [20]
        },
        SAPELLIDO: {
            type: Sequelize.STRING,
            require: true,
            allowNull: false,
            len: [20]
        },
        FECHA_NACIMIENTO: {
            type: Sequelize.DATE(6),
            require: true,
            allowNull: false
        }    
            

    },{
        underscored:true,
        paranoid:true
    })
}