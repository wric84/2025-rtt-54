const Book = require("../models/Book")

const createBook = async (req, res) => { 
    try {
        const book = await Book.create(req.body)
        res.json(book)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const getBooks = async (req, res) => {
    try {
        const books = await Book.find()
        res.json(books)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        if (!book) return res.status(404).json({message: "This is not the book you are looking for"})
        res.json(book)
    } catch (error) {
        console.error(error);
        
    }
}

const deleteBook = async (req, res) => {
        try {
            const deleted = await Book.findByIdAndDelete(req.params.id)
            if(!deleted) return res.status(404).json({message: "Book not found"})
            res.json({message: `Deleted book ${deleted.title}`})
        } catch (error) {
            res.status(400).json({message: "Invalid ID"})
        }
}

const updateBook = async (req, res) => {
    try {
        const updated = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        res.json(updated)
    } catch (error) {
        res.status(400).json({message: "Invalid ID"})
    }
}

module.exports = {createBook, getBooks, getBook, deleteBook, updateBook}