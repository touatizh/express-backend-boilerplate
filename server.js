/**
 * @fileoverview Entry point for your Express application.
 * @module index
 * @requires dotenv
 * @requires ./config/env.config
 * @requires express
 * @requires cors
 * @requires ./config/mongoose.config
 * @requires ./routes/your_model_name.routes
 */

// Load environment variables from .env file
require("dotenv").config();

// Configuration for environment variables
const env = require("./config/env.config");

// Import required modules
const express = require("express");
const app = express();
const cors = require("cors");

// Configure Express middleware
app.use(cors(), express.json(), express.urlencoded({ extended: true }));

// Connect to MongoDB using Mongoose
require("./config/mongoose.config");

// Set up routes for your model
require("./routes/your_model_name.routes")(app);

// Start the Express server
app.listen(env.PORT, () => console.log(`Listening on port ${env.PORT}...`));
