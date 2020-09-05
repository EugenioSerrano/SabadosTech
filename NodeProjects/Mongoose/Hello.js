console.log("Probando MongoDb");

const mongoose = require("mongoose");
var uri = "mongodb://localhost:27017/Pruebas";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

const Schema = mongoose.Schema;
let employee = new Schema(
  {
    name: {
      type: String
    },
    age: {
      type: Number
    },
    location: {
      type: String
    }
  },
  { collection: "Employees" }
);
employees = mongoose.model("employees", employee);


// const employees = require("./model");


var data = [
    {
      name: "John",
      age: 21,
      location: "New York"
    },
    {
      name: "Smith",
      age: "27",
      location: "Texas"
    },
    {
      name: "Lisa",
      age: 23,
      location: "Chicago"
    }
  ];


  employees.insertMany(data, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
  });

  