const jwt = require('jsonwebtoken')

// function to create json web token 

exports.createJWT = (email, userId, duration) => {
    // define the jwt structure


    
    const payload = {

        email,
        userId,
        duration

    };

    // return the signed token
  
    return jwt.sign(payload, process.env.SECRET_TOKEN,
        {expiresIn: duration,})
}