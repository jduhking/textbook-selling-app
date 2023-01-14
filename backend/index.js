const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config();
const nodemailer = require("nodemailer")


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

const transporter = nodemailer.createTransport({

    host: 'smtp.sendgrid.net',
    port: 587,
    auth: {

        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY
    }
})

transporter.verify(function(error, success){

    if(error){
        console.log(error)
    } else {
        console.log('Server is ready for sending emails!')
    }
})
transporter.sendMail({

    from: 'noreply@utdbooks.com',
    to: 'jamesbodebiyi@gmail.com',
    subject: 'Test Message',
    text: 'This is a test email',
    html: '<b>Hey there!</b>'
    }, function(error, info){

        if(error){
            console.log(error)
        } else {
            console.log('Email sent: ' + info.response)
        }
})