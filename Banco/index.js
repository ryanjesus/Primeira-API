const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const usuarios = require('./models/Usuario');
const { render } = require("ejs");


//Config
    //Template Engine
    app.set("view engine", "ejs")
    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

//Rotas
    app.get('/', (req, res) =>{
        res.render('formulario');
    });

    app.post('/cad', (req, res) =>{
        usuarios.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            conta: req.body.conta,
            saldo: req.body.saldo,
            ativo: req.body.ativo
        }).then(function(){
            res.send("Usuário criado com sucesso!")
        }).catch(function(erro){
            res.send("Houve um erro" + erro)
        })
    });

    app.get('/res', (req, res) =>{
        res.render('saldoesacar');
    });



//A função do express tem quer a última no codigo
app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081");
})