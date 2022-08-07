"use strict";

// Create a model object
const Project = require("../models/project");

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

  // Create a saveProject function
  saveProject: function (req, res) {
    // Create a new project object
    const project = new Project();

    // Create a params variable to store the body of the request
    var params = req.body;

    // Set the properties of the project object
    project.name = params.name;
    project.description = params.description;
    project.category = params.category;
    project.year = params.year;
    project.langs = params.langs;
    project.image = null;

    // Save the project object in the database
    project.save((err, projectStored) => {
      // Check if there is an error
      if (err) {
        // Send a 500 response with a message
        res.status(500).send({
          message: "Error saving the project!!!",
        });
      }

      // Check if the project is not stored
      if (!projectStored) {
        // Send a 404 response with a message
        res.status(404).send({
          message: "The project was not saved!!!",
        });
      }

      // Return a 200 response with the project stored
      res.status(200).send({
        project: projectStored,
        message: "The project saved successfully!!!",
      });
    });
  },

  // Create a getProject function
  getProject: function (req, res) {
    // Create a projectId variable to store the id of the request
    var projectId = req.params.id;

    // Find the project in the database
    Project.findById(projectId, (err, project) => {
      // Check if there is an error
      if (err) {
        // Send a 500 response with a message
        res.status(500).send({
          message: "Error getting the project!!!",
        });
      }

      // Check if the project is not found
      if (!project || projectId == null) {
        // Send a 404 response with a message
        res.status(404).send({
          message: "The project was not found!!!",
        });
      }

      // Return a 200 response with the project found
      res.status(200).send({
        project: project,
        message: "The project found successfully!!!",
      });
    });
  },

  // Create a getProjects function
  getProjects: function (req, res) {
    // Find the projects in the database
    Project.find({}, (err, projects) => {
      // Check if there is an error
      if (err) {
        // Send a 500 response with a message
        res.status(500).send({
          message: "Error getting the projects!!!",
        });
      }

      // Check if the projects are not found
      if (!projects) {
        // Send a 404 response with a message
        res.status(404).send({
          message: "Projects were not found!!!",
        });
      }

      // Return a 200 response with the projects found
      res.status(200).send({
        projects: projects,
        message: "Projects listed successfully!!!",
      });
    }).sort("-year"); // Sort the projects by year in descending order
  },
};

// Export the controller object
module.exports = controller;
