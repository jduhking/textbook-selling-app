const User = require('../../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const {
    createJWT,
} = require('../../utils/auth')

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

module.exports = function (router) {
    router.get('/signup', Signup)
}

async function Signup(req, res) {

    // get all the signup information

    let { username, email, password } = req.body
    
    // initialize an errors array and append anytime an error is caught

    let errors = []

    // error cases

    if(!username){
        errors.push({ username: 'required'})
    }
    
    if(!email){
        errors.push({email: 'required'})
    }

    // if email is not in correct format return an error

    if(!emailRegexp.test(email)) {
        errors.push({ email: 'invalid' })
    }
    
    if(!password) {
        errors.push({ password: 'required'})
    }

    // if any erros caught then return a status code and return the errors caught

    if(errors.length > 0){

        // return the message as json 

        return res.status(422).json({errors: errors})
    }

    // check if the user already exists, if so then return an error that the user already exists
    // error code is 422 because the entity cannot be processed (signup didnt work)
    User.findOne({email: email})
        .then(user =>{
            if(user){
                return res.status(422).json({ errors: [{
                    user: "email already exists"
                }]})
            } else { // if the user isn't in the database then create user model
                const user = new User({
                    username: username,
                    email: email,
                    password: password,
                })

                // salt the password

                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(password, salt, function(err, hash){

                        if(err) throw err;
                        // store the hash at password field

                        user.password = hash;
                        user.save()
                            .then(response => {
                                res.status(200).json({
                                    success: true,
                                    result: response
                                })
                            }) // catch any errors
                            .catch(err => {
                                res.status(500).json({ // if err comes during salting then return an internal server error
                                    errors: [{ error: err}]
                                })
                            })
                    })
                })
            } // be sure to catch errors if db query goes wrong
        }).catch(err => {
            res.status(500).json({
                errors: [{ error: 'Something went wrong'}]
            })
        })
    }