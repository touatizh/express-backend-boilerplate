/**
 * Configuration module for managing environment variables.
 * Loads environment variables from a .env file if available.
 * Ensure to create a .env file with the necessary configuration.
 * Example:
 *   SERVER_PORT=8000
 *   DB_CONN=...
 *   DB_NAME=...
 * @module config/env.config
 */


module.exports = {
    /**
   * The port on which the server will listen.
   * If not specified in the environment variables, defaults to 8000.
   *
   * @type {number}
   */
    PORT: process.env.PORT || 8000,
    /**
   * The MongoDB connection string, combining the DB connection URL and DB name.
   * If not specified in the environment variables, defaults to "mongodb://127.0.0.1:27017/my_db".
   *
   * @type {string}
   */
    DB_CONN_STRING: (process.env.DB_CONN + process.env.DB_NAME) || "mongodb://127.0.0.1:27017/my_db",
};
