// Import mongoose library for MongoDB interactions
const mongoose = require("mongoose");

// Import environment variables from the env.config file
const env = require("./env.config");

// Connect to the MongoDB database using the DB_CONNECTION_STRING from the configuration
mongoose.connect(env.DB_CONN_STRING)
    // Connection successful
    .then(() =>console.log("Established connection to the database..."))
    // Connection failed
    .catch((error) => console.error("Error connecting to the database:", error.message)
);
