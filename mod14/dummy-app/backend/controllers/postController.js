const Post = require('../models/Post')

//create a new post
const createPost = async (req, res) => {
    try {
        const post = await Post.create(req.body)
        res.status(201).json(post)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

//get all posts
const getPosts = async (req, res) => {
    const posts = await Post.find()
    res.json(posts)
}

module.exports = {getPosts, createPost}