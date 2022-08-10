"use strict";

// Create a express object
const express = require("express");

// Create a body-parser object
const bodyParser = require("body-parser");

// Create an app to execute the express object
const app = express();

// Setup files Routes
const projectRoutes = require("./routes/project");

// Setup Middelwares
app.use(bodyParser.urlencoded({ extended: false })); // Parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // Parse application/json
app.use("/api", projectRoutes); // Setup the routes

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Allow", "GET, POST, PUT, DELETE");
  next();
}),
  // Load Routes
  /*
//home route
app.get("/", (req, res) => {
  // Send a H1 tag with the text "It's alive!!!" as 200 status code
  res.status(200).send("<h1>It's alive!!!</h1>");
});

//Test Route
app.get("/test", (req, res) => {
  // Send a 200 response with a message
  res.status(200).send({
    message: "It's working!!! :D",
  });
});

// Post Route
app.post("/post", (req, res) => {
  // Send a 200 response with a message
  res.status(200).send({
    message: "Post request received!!!",
  });

  // Console log the request
  //console.log(req);

  // Console log the body of the request
  //console.log(req.body);

  // Console log the request nombre property and apellidos property
  console.log(req.body.nombre, " - ", req.body.apellidos);
});
*/

  // Export the app object
  (module.exports = app);
