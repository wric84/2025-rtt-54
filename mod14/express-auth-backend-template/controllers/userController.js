const User = require('../models/User')

function getAllUsers(req, res) {
  res.send("Sending all users...");
}

function getUserById(req, res) {
  res.send(`Data for user: ${req.params.id}`);
}

function loginUser(req, res){
  res.send(`Data for user: ${req.body.username}`)
}

async function registerUser(req, res){
  const user = await User.create(req.body)
  console.log(user)
  res.send(`Data for user: ${req.body.username}`)
}

module.exports = {
  getAllUsers,
  getUserById,
  loginUser,
  registerUser
};
