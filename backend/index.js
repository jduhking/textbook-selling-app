const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config();


const app = express()

const port = process.env.PORT || 4000

// app

app.get('/', (req,res) => {
    res.send('Hello Word!')
})

app.get('/login', (req,res) => {
    res.send('<h1> Login </h1>')
})
// database
mongoose.set('strictQuery', false)

mongoose.connect(
    process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => console.log('Connected to MongoDB'))

// middlewares

app.use(bodyParser.json())
app.use(cors())


app.listen(port, () => {
    console.log(`text-book-app listening on port ${port}`)
})