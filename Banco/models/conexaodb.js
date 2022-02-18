
//npm install --save sequelize
//npm install --save express
//npm install --save mysql2
//npm install ejs
//npm install body-parser

//Se conectado ao mysql
const { Model } = require('sequelize')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('usuarios', 'root', '64557010', {
    host: "localhost",
    dialect: 'mysql'
})

//Verificar a conexão
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+ erro)
})


//Exportado a conec
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}




