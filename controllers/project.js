"use strict";

// Create a json class for the controller
const controller = {
  // Create a home function
  home: function (req, res) {
    // Send a H1 tag with the text "It's alive!!!" as 200 status code
    res.status(200).send({
      message: "<h1>This is the home</h1>",
    });
  },

  // Create a test function
  test: function (req, res) {
    // Send a 200 response with a message
    res.status(200).send({
      message: "<h1>This is the test</h1>",
    });
  },
};

// Export the controller object
module.exports = controller;
