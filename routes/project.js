// Setup file for routes.
"use strict";

// Create a express object
const express = require("express");

// Create a project controller object
const projectController = require("../controllers/project");

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

// Export the router object
module.exports = router;
