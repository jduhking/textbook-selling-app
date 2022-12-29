const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config();


const app = express()

const port = process.env.PORT || 4000


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
app.use(morgan(':method :url :status'))
app.use(cors())


// pull routes

const routes = require("./routes")(express)

app.use(routes)



app.listen(port, () => {
    console.log(`text-book-app listening on port ${port}`)
})