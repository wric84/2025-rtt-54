const express = require('express')
const router = express.Router()
const {createBook, getBooks, getBook, deleteBook, updateBook} = require('../controllers/bookController')

router.post("/", createBook)

router.get("/", getBooks)

router.get("/:id", getBook)

router.delete("/:id", deleteBook)

router.put('/:id', updateBook)

module.exports = router