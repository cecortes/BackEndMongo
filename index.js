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
      console.log("************************************************");
      console.log(`Server running on localhost:${port}`);
      console.log("Press CTRL + C to stop the server");
      console.log("************************************************");
      console.log("Routes available:");
      console.log("/api/");
      console.log("/api/test");
      console.log("/api/save-project");
      console.log("/api/get-project/:id?");
      console.log("/api/get-projects");
      console.log("/api/update-project/:id");
      console.log("/api/delete-project/:id");
      console.log("/api/upload-image/:id");
      console.log("************************************************");
      console.log("Create a project with the following data:");
      console.log("name: String");
      console.log("description: String");
      console.log("category: String");
      console.log("year: Number");
      console.log("langs: String");
      console.log("imgage: String");
      console.log("************************************************");
    });
  })
  .catch((err) => console.log(err));
