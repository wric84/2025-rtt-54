// title: A required string.
// author: A required string.
// publicationYear: A number.
// genres: An array of strings.
// inStock: A boolean with a default value of true.

const mongoose = require('mongoose')
const {Schema} = mongoose

const bookSchema = new Schema({
    title: {
        type: String,
        required: [true, 'A title is required']
    },
    author: {
        type: String,
        required: [true, "An author is required"]
    },
    publicationYear: Number,
    genre:[String],
    inStock: {
        type: Boolean,
        default: true
    }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book