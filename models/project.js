"use strict";

// Import moongose object
const mongoose = require("mongoose");

// Create a schema
const Schema = mongoose.Schema;

// Create a project schema
const ProjectSchema = Schema({
  // Create properties for the schema
  name: String,
  description: String,
  category: String,
  year: Number,
  langs: String,
  image: String,
});

// Export the project schema
module.exports = mongoose.model("Project", ProjectSchema);
