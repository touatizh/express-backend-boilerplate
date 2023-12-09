/**
 * @fileoverview Controller functions for handling CRUD operations on your_model_name.
 * @module controllers/your_model_name.controller
 * @requires ../models/your_model_name.model
 */

const yourModelName = require("../models/your_model_name.model");

/**
 * Creates a new instance of your_model_name.
 * @function
 * @name create
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
module.exports.create = (req, res) => {
    yourModelName.create(req.body)
        /** Creation successful: construct the response JSON payload as you wish. Example: res.json({result}) */
        .then(result => res.json({result})) 
        /** Creation failed: construct the response JSON payload as you wish. Example: res.json({error}) */
        .catch(error => res.json({error}));
};

/**
 * Retrieves a specific instance of your_model_name by ID.
 * @function
 * @name getOne
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
module.exports.getOne = (req, res) => {
    yourModelName.findOne({_id: req.params.id})
        /** Query successful: construct the response JSON payload as you wish. Example: res.json({result}) */
        .then(result => res.json({result}))
        /** Query failed: construct the response JSON payload as you wish. Example: res.json({error}) */
        .catch(error => res.json({error}));
};

/**
 * Retrieves all instances of your_model_name.
 * @function
 * @name getAll
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
module.exports.getAll = (req, res) => {
    yourModelName.find()
        /** Query successful: construct the response JSON payload as you wish. Example: res.json({result}) */
        .then(result => res.json({result}))
        /** Query failed: construct the response JSON payload as you wish. Example: res.json({error}) */
        .catch(error => res.json({error}));
};

/**
 * Updates a specific instance of your_model_name by ID.
 * @function
 * @name update
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
module.exports.update = (req, res) => {
    yourModelName.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        /** Update successful: construct the response JSON payload as you wish. Example: res.json({result}) */
        .then(result => res.json({result}))
        /** Update failed: construct the response JSON payload as you wish. Example: res.json({error}) */
        .catch(error => res.json({error}));
};

/**
 * Deletes a specific instance of your_model_name by ID.
 * @function
 * @name delete
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
module.exports.delete = (req, res) => {
    yourModelName.deleteOne({_id: req.params.id})
        /** Deletion successful: construct the response JSON payload as you wish. Example: res.json({result}) */
        .then(result => res.json({result}))
        /** Deletion failed: construct the response JSON payload as you wish. Example: res.json({error}) */
        .catch(error => res.json({error}));
};
