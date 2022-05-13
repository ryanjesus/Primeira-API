const conexaodb = require('./conexaodb')

//Criando tabela usuarios e modulo
const usuarios = conexaodb.sequelize.define('users', {
    nome: {
        type: conexaodb.Sequelize.STRING
    },
    email: {
        type: conexaodb.Sequelize.STRING
    },
    password: {
        type: conexaodb.Sequelize.STRING
    },
    conta: {
        type: conexaodb.Sequelize.STRING
    },
    saldo: {
        type: conexaodb.Sequelize.FLOAT
    },
    ativo: {
        type: conexaodb.Sequelize.BOOLEAN
    }
})


module.exports = usuarios

//Só descomenta essa linha se for criar a tabela novamente
//usuarios.sync({force: true})