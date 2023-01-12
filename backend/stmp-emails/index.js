require('dotenv').config()

const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({

    host: 'smtp.sendgrid.net',
    port: 587,
    auth: {

        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY
    }
})

transporter.sendMail({

    from: 'noreply@utdbooks.com',
    to: 'jamesbodebiyi@gmail.com',
    subject: 'Test Message',
    text: 'This is a test email',
    }, function(error, info){

        if(error){
            console.log(error)
        } else {
            console.log('Email sent: ' + info.response)
        }
})