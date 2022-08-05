"use strict";

// Create a moongose object
const mongoose = require("mongoose");

// Make a promise for moongose
mongoose.Promise = global.Promise;

// Connect to the database with mongoose
mongoose
  .connect("mongodb://localhost:27017/portafolio")
  .then(() => console.log("Conectado a la base de datos... OK!!!"))
  .catch((err) => console.log(err));
