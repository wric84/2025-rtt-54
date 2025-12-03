//llogic is done here

const Book = require('../models/Book')

//createBook
const createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body)
        res.status(200).json(book)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
//get all books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find()
        res.send(books)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        if (!book) return res.status(404).json({error: "Book not found"})
        res.json(book)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const deleteBook = async (req, res) => {
    try {
        const removeBook = await Book.findByIdAndDelete(req.params.id)
        res.json(`Removed book: ${removeBook.title}`)
    } catch (error) {
        res.status(400).json({error: error.message}) 
    }
}

const updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body, 
            {new: true}
        )
        if(!updatedBook) return res.status(400).json({error: "Book not found"})
        res.json(updatedBook)

    } catch (error) {
        res.status(400).json({error: error.message}) 
    }
}

const filterBook = async (req, res) => {
    try {

    const {minPrice, maxPrice} = req.query
    const filter = {}

    if(minPrice || maxPrice){
        filter.price ={}
        if(minPrice) filter.price.$gte = Number(minPrice)
        if(maxPrice) filter.price.$lte = Number(maxPrice)
    }
    const books = await Book.find(filter).select({title: 1, price: 1, _id: 0})
    res.json(books)
    
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const sortBooks = async (req, res) => {
    try {
        const {sortBy ='price', order='asc'} = req.query

        const sortOrder = order === 'desc' ? -1: 1
        const sortObj = {}
        sortObj[sortBy] = sortOrder

        const books = await Book.find().sort(sortObj).select({title: 1, price: 1, _id: 0})
        res.json(books)

        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {createBook, getAllBooks, getBookById, deleteBook, updateBook, filterBook, sortBooks}