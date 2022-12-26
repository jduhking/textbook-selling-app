const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
    
    username:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
    collection: 'users'
})

module.export = mongoose.model('User', userSchema)