"use strict"
const {Sequelize, DataTypes} = require('sequelize');

console.log("Entro aca");
const sequelize = new Sequelize('tienda', 'root', '' ,{
        host:'localhost',
        dialect: 'mysql'
    }
);


/**############## MODELOS ########################## */
/** user.models.js */

const Cliente = sequelize.define('Cliente',{
        nombre:{
            type: DataTypes.STRING,
            allowNull:false 
        },
        apellido:{
            type: DataTypes.STRING,
            allowNull: false
        }, 
        edad:{
           type: DataTypes.INTEGER 
        },
        activo:{
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        dni:{
            type: DataTypes.INTEGER,
            unique:true,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            unique:true,
            allowNull:true
        }
    }
);

const newCliente = Cliente.create(
    {
        nombre: 'Ale',
        apellido: 'Arri',
        edad:18,
        activo: true,
        dni:35592478,
        email:'ale@gmail.com'
    }
);

/**######################### FIN MODELO #################################### */



/*(async ()=>{
    try {
        await sequelize.authenticate();
        console.log("Conexión a la base de datos establecida correctamente");
    } catch (error) {
        console.error("Error al conectar a la base de datos", error);
    }
})();*/

// Sincronizar el modelo con la base de datos
(async () =>{
    try {
        await sequelize.sync({alter:true});
        console.log('Modelo sincronizado correctamente con la base de datos');
    } catch (error) {
        console.log('Error al sincronizar el modelo:', error);
    }
})();