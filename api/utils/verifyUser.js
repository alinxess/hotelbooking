const {createError} = require('./error')
const {verifyToken} = require('./verifyToken')

module.exports = {

    verifyUser(req, res, next){
        verifyToken(req, res, ()=>{
            if(req.user.id === req.params.id || req.user.isAdmin){
                next()
            }else{
                return next(createError(403, "You are not authorized!"))
            }
        })
    }
};