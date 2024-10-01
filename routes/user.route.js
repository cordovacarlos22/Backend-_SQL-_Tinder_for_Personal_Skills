// ! import express
const express = require('express'); 

const router = express.Router(); // instance router

// * Import user controllers
const userController = require('../controllers/user.controllers');

// ? define routes
// * POST /users - Register a new user
router.post('/users', userController.registerUser);
router.get('/users', userController.getAllUsers);
router.get('/users/skill/:skillName', userController.findUserBySkill);
router.get('/users/:userId', userController.findOneUser);
router.patch('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);


// exports router 
module.exports = router;