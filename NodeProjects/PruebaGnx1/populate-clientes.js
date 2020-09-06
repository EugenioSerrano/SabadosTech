console.log("Creando Clientes...");

const mongoose = require("mongoose");
var uri = "mongodb://localhost:27017/PruebaGnx1";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

function handleError (err) {
  console.log('HUBO UN ERROR:', JSON.stringify(err))
}

const Cliente = require('./models/cliente')

var c1 = new Cliente(
  {
      nombre: "Eugenio",
      apellido: "Serrano",
      edad: 50
  });
c1.save(function (err) {
if (err) return handleError(err);
});

var c2 = new Cliente(
  {
    nombre: "John",
    apellido: "Doe",
    edad: 21
  });
c2.save(function (err) {
if (err) return handleError(err);
});

var c3 = new Cliente(
  {
    nombre: "Juan",
    apellido: "Perez",
    edad: 31
});
c3.save(function (err) {
if (err) return handleError(err);
});

  