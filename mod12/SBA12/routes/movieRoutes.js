const express = require('express')

const movieRouter = express.Router()

//Routes
movieRouter.get('/', (req, res) => {
    res.send('Sending All Movies')
})

movieRouter.get('/search', (req, res) => {
    res.send('Searching...')
})

movieRouter.get('/:id', (req, res) => {
    res.send(`Data for movie: ${req.params.id}`)
})

module.exports = movieRouter