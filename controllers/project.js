"use strict";

// Create a model object
const Project = require("../models/project");

// Create a fs object to use the file system module
const fs = require("fs");

// Create a path object to use the path module
const path = require("path");

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

  // Create a updateProject function
  updateProject: function (req, res) {
    // Create a projectId variable to store the id of the request
    var projectId = req.params.id;

    // Create a update object to store the body of the request
    var update = req.body;

    // Find the project in the database and update it
    Project.findByIdAndUpdate(
      projectId,
      update,
      { new: true }, // Return the updated project
      (err, projectUpdated) => {
        // Check if there is an error
        if (err) {
          // Send a 500 response with a message
          res.status(500).send({
            message: "Error updating the project!!!",
          });
        }

        // Check if the project is not found
        if (!projectUpdated) {
          // Send a 404 response with a message
          res.status(404).send({
            message: "The project was not found!!!",
          });
        }

        // Return a 200 response with the project found
        res.status(200).send({
          project: projectUpdated,
          message: "The project updated successfully!!!",
        });
      }
    );
  },

  // Create a deleteProject function
  deleteProject: function (req, res) {
    // Create a projectId variable to store the id of the request
    var projectId = req.params.id;

    // Find the project in the database and delete it
    Project.findByIdAndRemove(projectId, (err, projectRemoved) => {
      // Check if there is an error
      if (err) {
        // Send a 500 response with a message
        res.status(500).send({
          message: "Error deleting the project!!!",
        });
      }

      // Check if the project is not found
      if (!projectRemoved) {
        // Send a 404 response with a message
        res.status(404).send({
          message: "The project was not found!!!",
        });
      }

      // Return a 200 response with the project found
      res.status(200).send({
        project: projectRemoved,
        message: "The project deleted successfully!!!",
      });
    });
  },

  // Create a uploadImage function
  uploadImage: function (req, res) {
    // Create a projectId variable to store the id of the request
    var projectId = req.params.id;

    // Create a file variable to store the file of the request
    var file = req.files;
    var file_name = "Imagen no subida";

    // Check if the file is not empty
    if (file) {
      // Create a filePath variable to store the path of the file
      var filePath = file.image.path;

      // Create a fileSplit variable to store the split of the file path
      var fileSplit = filePath.split("/");

      // Create a fileName variable to store the name of the file
      var fileName = fileSplit[1];

      // Create a fileExtension variable to store the extension of the file
      var fileExtension = fileName.split(".");

      // Create a fileExtension variable to store the extension of the file
      var fileExtension = fileExtension[1];

      // Check if the file extension is equal to the allowed extensions
      if (
        fileExtension == "png" ||
        fileExtension == "jpg" ||
        fileExtension == "jpeg" ||
        fileExtension == "gif"
      ) {
        // Save the file in the database
        Project.findByIdAndUpdate(
          projectId,
          { image: fileName },
          { new: true }, // Return the updated project
          (err, projectUpdated) => {
            // Check if there is an error
            if (err) {
              // Send a 500 response with a message
              res.status(500).send({
                message: "Error uploading the image!!!",
              });
            }

            // Check if the project is not found
            if (!projectUpdated) {
              // Send a 404 response with a message
              res.status(404).send({
                message: "The project was not found!!!",
              });
            }

            // Return a 200 response with the project found
            res.status(200).send({
              project: projectUpdated,
              message: "The image uploaded successfully!!!",
            });
          }
        );
      } else {
        // Delete the file from the system
        fs.unlink(filePath, (err) => {
          // Check if there is an error
          if (err) {
            // Send a 500 response with a message
            res.status(500).send({
              message: "Error deleting the image!!!",
            });
          }
        });

        // Send a 400 response with a message
        res.status(400).send({
          message: "The image extension is not valid!!!",
        });
      }
    } else {
      // Send a 404 response with a message
      res.status(404).send({
        message: "File not uploaded!!!",
      });
    }
  },

  // Create a getImageFile function
  getImageFile: function (req, res) {
    // Create a file variable to store the url of the request
    var file = req.params.image;

    // Create a filePath variable to store the path of the file
    var filePath = "./uploads/" + file;

    // Check if the file exists
    if (fs.existsSync(filePath)) {
      // Send a 200 response with the file
      res.sendFile(path.resolve(filePath));
    } else {
      // Send a 404 response with a message
      res.status(404).send({
        message: "The image was not found!!!",
      });
    }
  },
};

// Export the controller object
module.exports = controller;
