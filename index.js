"use strict";

// Create a moongose object
const mongoose = require("mongoose");

// Create an app object
const app = require("./app");

// Create a port variable to run the server on
const port = 6969;

// Make a promise for moongose
mongoose.Promise = global.Promise;

// Connect to the database with mongoose
mongoose
  .connect("mongodb://localhost:27017/portafolio")
  .then(() => {
    console.log("Conectado a la base de datos... OK!!!");

    // Create Server
    app.listen(port, () => {
      console.log(`Server running on localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
