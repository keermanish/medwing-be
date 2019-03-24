const express = require('express');
const MarkerRoutes = require('./marker');

const Routes = express.Router();

// combine all routes
Routes.use('/marker', MarkerRoutes);

module.exports = Routes;
