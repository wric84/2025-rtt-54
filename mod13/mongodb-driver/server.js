const express = require('express');
const morgan = require('morgan');

// Set up all variables in the .env file
require('dotenv').config();

//? ============ MONGO DB =========================
const { MongoClient } = require('mongodb');

// Replace this with your own connection string
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

async function run() {
    try {
        // Connect the client to the server
        await client.connect();
        // Establish and verify connection
        await client.db("2025-rtt-54").command({ ping: 1 });
        console.log("Connected successfully to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}

run().catch(console.dir);
//? ============ MONGO DB =========================

const PORT = process.env.PORT || 4000;

const app = express();


// ========= Middlewares =================
app.use(morgan('dev')); // logger
app.use(express.json()); // body parser

// ========= Routes ======================
app.use('/api/user', require('./routes/userRoutes'));

app.get('/api/songs', async (req, res) => {
    try {
        const cursor = await client.db('2025-rtt-54').collection('songs').find({})
        const results = await cursor.toArray()
        res.json(results)
    } catch (error) {
        console.error(error);
        
    }
})

// Use this route to setup the API documentation
app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});

