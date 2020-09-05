const graphql = require('graphql')
const gnx = require('@simtlix/gnx')
const Cliente = require('../models/cliente')

const {
  GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID
} = graphql

const ClienteType = new GraphQLObjectType({
  name: 'Cliente',
  fields: () => ({
    id: { type: GraphQLID },
    Nombre: { type: GraphQLString },
    Apellido: { type: GraphQLString },
    Edad: { type: GraphQLInt }
  })
})

gnx.connect(Cliente, ClienteType, 'cliente', 'clientes')

module.exports = ClienteType
