const express = require('express');
const router = express.Router();
const readmeController = require('../controllers/readmeController');

// Define the route for the root endpoint to serve README.md
router.get('/', readmeController.renderReadme);

module.exports = router;