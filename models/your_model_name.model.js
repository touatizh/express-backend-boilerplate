/**
 * @fileoverview Defines the mongoose model for your_model_name.
 * @module models/your_model_name.model
 * @requires mongoose
 */

const mongoose = require("mongoose");

/**
 * Mongoose schema for the your_model_name model.
 * @const
 * @type {mongoose.Schema}
 */
const YourModelSchema = mongoose.Schema({
    /** @type {String} Property description. */
    property: {
        type: String, // if property is not a string, change the type accordingly
    },
});

/**
 * Mongoose model for the your_model_name schema.
 * @type {mongoose.Model}
 */
module.exports = mongoose.model("your_model_name", YourModelSchema);
