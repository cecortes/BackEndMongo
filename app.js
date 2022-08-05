"use strict";

// Create a express object
const express = require("express");

// Create a body-parser object
const bodyParser = require("body-parser");

// Create an app to execute the express object
const app = express();

// Setup files Routes

// Setup Middelwares
app.use(bodyParser.urlencoded({ extended: false })); // Parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // Parse application/json

// CORS

// Load Routes

// home route
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

// Export the app object
module.exports = app;
