// ! import express
const express = require('express'); 

const router = express.Router(); // instance router

// * Import user controllers
const userController = require('../controllers/user.controllers');

// ? define routes
// * POST /users - Register a new user
router.post('/users', userController.registerUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:userId', userController.findOneUser);


// exports router 
module.exports = router;