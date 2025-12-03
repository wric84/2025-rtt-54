const mongoose = require('mongoose')


const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    author:{
        type: String,
        required: true,
        trim: true
    },
    isbn:{
        type:String,
        unique: true
    },
    publishedDate:{
        type: Date
    },
    inStock:{
        type: Boolean,
        default: true
    },
    price:{
        type: Number,
        required: true,
        min: 0
    }
})

module.exports = mongoose.model("Book", bookSchema)

// title: A String, which is required.
// author: A String, which is required.
// isbn: A String, which must be unique.
// publishedDate: A Date.
// inStock: A Boolean, with a default value of true
