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

const findOneUser = async (req, res) => {
  try {
    let userFound = await UserModel.findOneUser(req.params.userId);
    res.status(200).json(userFound);
  } catch (error) {
    res.status(400).json({ error: error.message }); // Send only the error message
  }
};

// update user
const updateUser = async (req, res) => {
  try {
    let updatedUser = await UserModel.updateUser(req.params.userId, req.body);
    res.status(200).json("User updated successfully",updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message }); // Send only the error message
  }
};

// delete user
const deleteUser = async (req, res) => {
  try {
    let deletedUser = await UserModel.deleteUser(req.params.userId);
    res.status(204).json("User deleted successfully",deletedUser);
  } catch (error) {
    res.status(400).json({ error: error.message }); // Send only the error message
  }
};


module.exports = {
  registerUser,
  getAllUsers,
  findOneUser,
  updateUser,
  deleteUser
  //... Other user routes...
}