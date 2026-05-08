const express = require('express')
const cors = require('cors')
const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('db_api', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

const Cliente = sequelize.define('Cliente', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
const Produto = sequelize.define('Produto', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    lote: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    preco: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const app = express()
app.use(cors())
app.use(express.json())

const port = 3000

app.get('/clientes', async (req, res) => {
    const todosOsClientes = await Cliente.findAll()
    res.json(todosOsClientes)
})

app.get('/produtos', async(req, res) => {
    const todosOsProdutos = await Produto.findAll()
    res.json(todosOsProdutos)
})



app.post('/clientes', async (req, res) => {
    try {
        const { nome, telefone, email } = req.body
        const novoCliente = await Cliente.create({ nome, email, telefone })
        res.status(201).json({
            mensagem: 'Cliente cadastrado com sucesso.',
            cliente: novoCliente
        })

    } catch (erro) {
        res.status(400).json({
            mensagem: 'Erro ao cadastrar cliente. verifique se o email já existe.'
        })
    }
})
app.post('/produtos', async(req, res) => {
    try{
        const { nome, quantidade, lote, preco} = req.body
        const novoProduto = await Produto.create({nome, quantidade, lote, preco})
        res.status(201).json({
            mensagem: 'Produto cadastrado com sucesso',
            Produto: novoProduto
        })
    }catch(erro){
        res.status(400).json({
            mensagem: 'Erro ao cadastrar Produtos'
        })
    }
})

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`✅Servidor rodando em http://localhost:${port}`);
        console.log('Banco de dados sincronizado.');

    })
}).catch((erro) => {
        console.error('Erro ao conectar ou sincronizar com o banco de dados:', erro);
    })
