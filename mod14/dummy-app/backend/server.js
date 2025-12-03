const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const connectDB = require('./db/connection')

const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

connectDB()

app.use("/users", require("./routes/userRoutes"))
app.use("/posts", require("./routes/postRoutes"))

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})