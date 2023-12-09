/**
 * @fileoverview Defines routes for the your_model_name model.
 * @module routes/your_model_name.routes
 * @requires ../controllers/your_model_name.controller
 */

const yourModelController = require("../controllers/your_model_name.controller");

/**
 * Sets up routes for the your_model_name model.
 * @param {Object} app - Express application.
 */
module.exports = (app) => {
    /**
     * Route to get all items for the your_model_name model.
     * @name GET /api/rest_of_your_route_to_get_all
     * @function
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     */
    app.get("/api/rest_of_your_route_to_get_all", yourModelController.getAll);

    /**
     * Route to get a single item for the your_model_name model.
     * @name GET /api/rest_of_your_route_to_get_one
     * @function
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     */
    app.get("/api/rest_of_your_route_to_get_one/:id", yourModelController.getOne);

    /**
     * Route to add a new item to the your_model_name model.
     * @name POST /api/rest_of_your_route_to_add_new_item
     * @function
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     */
    app.post("/api/rest_of_your_route_to_add_new_item", yourModelController.create);

    /**
     * Route to update an item for the your_model_name model.
     * @name PATCH /api/rest_of_your_route_to_update_item
     * @function
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     */
    app.patch("/api/rest_of_your_route_to_update_item/:id", yourModelController.update);

    /**
     * Route to delete an item for the your_model_name model.
     * @name DELETE /api/rest_of_your_route_to_delete_item
     * @function
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     */
    app.delete("/api/rest_of_your_route_to_delete_item/:id", yourModelController.delete);
};
