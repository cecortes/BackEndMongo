// Setup file for routes.
"use strict";

// Create a express object
const express = require("express");

// Create a project controller object
const projectController = require("../controllers/project");

// Create a middleware object to use the multipart module and save the image in the uploads folder
const multipart = require("connect-multiparty");

// Create a multipart object to use the uploads folder
const uploads = multipart({ uploadDir: "./uploads" });

// Create a router object
const router = express.Router();

// Create a home route
router.get("/", projectController.home);

// Create a test route
router.post("/test", projectController.test);

// Create a saveProject route
router.post("/save-project", projectController.saveProject);

// Create a getProject route by id
router.get("/get-project/:id?", projectController.getProject);

// Create a getProjects route
router.get("/get-projects", projectController.getProjects);

// Create a updateProject route
router.put("/update-project/:id", projectController.updateProject);

// Create a deleteProject route
router.delete("/delete-project/:id", projectController.deleteProject);

// Create a uploadImage route
router.post("/upload-image/:id", uploads, projectController.uploadImage);

// Export the router object
module.exports = router;
