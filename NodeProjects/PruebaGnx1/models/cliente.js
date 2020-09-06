const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clienteSchema = new Schema(
    {
        nombre: String,
        apellido: String,
        edad: Number
    }
)

const Cliente = mongoose.model('Cliente', clienteSchema, 'cliente')
Cliente.createCollection()

module.exports =  Cliente
