const express = require('express')
const { createBook, getAllBooks, getBookById, deleteBook, updateBook, filterBook, sortBooks } = require('../controllers/bookController')

const router = express.Router()

router.post("/", createBook)

router.get("/", getAllBooks)

router.get("/filter", filterBook)

router.get("/sort", sortBooks)

router.get("/:id", getBookById)

router.delete("/:id", deleteBook)

router.put("/:id", updateBook)

module.exports = router