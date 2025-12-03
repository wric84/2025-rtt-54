const express = require('express')
const {connectDB} = require('./db/connection')
const dotenv = require('dotenv')
const bookRoutes = require("./routes/bookRoutes")
const morgan = require('morgan')

dotenv.config()
connectDB()

const app = express()
const PORT = 4000

//Middleware
app.use(express.json())
app.use(morgan("dev"))

app.get('/', (req, res) => {
    res.send("Welcome to our book app! Make youreself at home")
})

app.use("/books", bookRoutes)

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`) 
})