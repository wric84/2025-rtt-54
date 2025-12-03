const express = require('express')

const PORT = 4000

const app = express()

app.use((req, res, next) => console.log(`Request: ${req.method}, ${req.path}`))

app.get('/', (req, res) => {
    res.send('Root Route!')
})

app.get('/api/comments', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')

        if(!response.ok){
            throw new Error("No comments found")
        }
        const data = await response.json()

        const transformedComments = data.map((comment) => `${comment.email} commented: ${comment.name}`)
        res.json(transformedComments)
    } catch (error) {
        console.error(error.message);
        res.status(502).json({error: "Error fetching comments"})
        
    }
})

app.get('/api/users/:id', async (req, res) => {
    const {id} = req.params
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        if(!response.status){
            throw new Error(`Error fetching user with id: ${id}`)
        }
        if (response.status === 404){
            return res.status(404).json({error: `User not found with id ${id}`})
        }

        const user = await response.json()
        res.json(user)
    } catch (error) {
        console.error(error.message);
        res.status(502).json({error: `Error fetching user wit id: ${id}`})        
    }
})

app.listen(PORT, ()=> {
    console.log(`Server running on port: ${PORT}`);
    
})