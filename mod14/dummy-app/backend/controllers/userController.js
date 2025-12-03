const User = require("../models/User")

//create a new user
const createUser = async (req, res) => { 
    try {
        const user = await User.create(req.body)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//get users
const getUsers = async (req, res) => {
    const users = await User.find()
    res.json(users)
}

module.exports = {getUsers, createUser}