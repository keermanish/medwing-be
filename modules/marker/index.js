const express = require('express');
const controller = require('./marker.controller');

const MarkerRoutes = express.Router();

/**
 * route to store new marker
 * POST /marker/new
 */
MarkerRoutes.post('/new', controller.addMarker);

/**
 * route to get all/specific stored marker info
 * GET /marker/:search [all/id]
 */
MarkerRoutes.get('/:id', controller.getMarkers);

/**
 * route to update marker info
 * PUT /marker/:id
 */
MarkerRoutes.put('/:id', controller.updateMarker);

/**
 * route to remove marker info
 * DELETE /marker/:id
 */
MarkerRoutes.delete('/:id', controller.deleteMarker);

module.exports = MarkerRoutes;
