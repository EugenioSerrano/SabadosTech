const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clienteSchema = new Schema(
    {
        Nombre: String,
        Apellido: String,
        Edad: Number
    }
)

const Cliente = mongoose.model('Cliente', clienteSchema, 'Cliente')
Cliente.createCollection()

module.exports =  Cliente
