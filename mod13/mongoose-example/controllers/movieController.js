const Movie = require("../models/Movie")

const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (error) {
         res.status(404).json({error: error.message})
    }
}

const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body)
        res.json(movie)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = {getMovies, createMovie}