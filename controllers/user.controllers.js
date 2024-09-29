// ! 1. import models

const UserModel = require('../models/user.model');


// ! 2. define user routes
const registerUser = async (req, res) => {
  try {
    const user = await UserModel.create(req.body);   // Await the creation of a user
    res.status(201).json(user); // Respond with the created user if successful

  } catch (error) {
    res.status(400).json({ error: error.message }); // Send only the error message
  }
};

const getAllUsers = async (req, res) => { 
  try {
    let users = await UserModel.findAllUsers();
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: error.message }); // Send only the error message
  }
}


module.exports = {
  registerUser,
  getAllUsers
  //... Other user routes...
}