const jwt = require('jsonwebtoken')
const {createError} = require('./error')

module.exports = {

    verifyToken(req, res, next){
        const token = req.cookies.access_token;
        if(!token){
            return next(createError(401, "You are not authenticated!"))
        }

        jwt.verify(token, process.env.SECRET, (err, user) => {
            if(err) return next(createError(403, "token is not valid"))

            req.user= user;
            next()
        })
    }
};