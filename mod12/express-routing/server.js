const express = require('express')

const PORT = 4000

const app = express()

app.use(express.json());

app.use((req, res, next) => {
    console.log(` Request received path: ${req.url} | Method ${req.method} | Timestamp: ${Date.now().toLocaleString()}`);
    next()
    
})

app.use('/api', (req, res, next) => {
    if (req.headers['x-api-key'] === 'superseretkey'){
        console.log("access allowed");
        next() 
    }else{
        res.status(401).json({error: "Unauthorized: API KEY REQUIRED"})
    }
})

app.use((req, res, next) => {
    console.log(`Request received to path ${req.url}`);
    next()
    
})

app.use((req, res, next) => { 
    console.log('Middleware2: Just checking in!');
    next()
    
})

app.use('/admin', (req, res, next) => {
    if(req.query.user === 'admin'){
        console.log('Access Granted');
        next()
        
    }else{
        res.status(401).send('Admin Only!')
    }
})

app.get('/', (req, res)=> {
    res.send("<h1> Hello From Express</h1>")
})

app.post('/products', (req, res) => {
    console.log(req.body);
    res.send(`created new products with`)
})

app.get('/products', (req, res) => {
    res.send(`Sending all products`)
})

app.get('/products/:productId', (req, res) => {
    console.log(req.params);
    res.send(`Sending data for product with id: ${req.params.productId}`)
    
})

app.get('api/products', (req, res) => {
    console.log(req.query);

    const {category, minPrice} = req.query
    if(!category && !minPrice){
        return res.send("Sending all products!")
    }

    res.send(`Sending for products in category ${category} with a minimum price of ${minPrice}`)
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})