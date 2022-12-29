const User = require('../../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {
    createJWT,
} = require('../../utils/auth')

module.exports = function (router) {
    router.get('/login', (req, res) => {
        Login(req, res)
    })
}


async function Login(req, res) {

    // get login fields from req

    let { email, password } = req.body;

    // check to see if the email is in the data base

    User.findOne({ email: email }).then(user => {

        // if the user is not found then return error message

        if(!user) { // 404 meaning entity not found
            return res.status(404).json({
                errors: [{ user: "not found"}],
            })
        } else { // however if the email is found, then check the password to see if it matches

            // .then is what makes it asynchronous
            bcrypt.compare(password, user.password).then(isMatch =>{
                
                
                if(!isMatch) { // if not a match return an error
                    return res.status(400).json({
                        errors : [{ password: "incorrect" }]
                    })
                }
              
                // generate jwt to access later without signing up
             

                const access_token = createJWT(
                    user.email, 
                    user._id,
                    120
                    )

    

                

                jwt.verify(access_token, 
                    process.env.SECRET_TOKEN, (err, decoded) => {
                        if(err) { // return an error if there is an error that arises during verification
                            res.status(500).json({ error: err})
                            console.log(' jwt error ')
                        }

                        if(decoded) { // if the token is valid return a success message
                            return res.status(200).json({
                                sucess: true,
                                token: access_token,
                                message: user
                            })
                        }
                    })

                   

                    // catch error if bcrypt.compare fails
            }).catch(err => {
                res.status(500).json({error: err})
               
            })
        }
    }).catch(err => { // catch error if user.findone fails
        res.status(500).json({error: err}) // 500 for internal server error
        console.log('find one error')
    })

}