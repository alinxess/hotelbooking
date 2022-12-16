const {createError} = require('./error')
const {verifyToken} = require('./verifyToken')

module.exports = {

    verifyAdmin(req, res, next){
        verifyToken(req, res, ()=>{
            if(req.user.isAdmin){
                next()
            }else{
                return next(createError(403, "You are not authorized!"))
            }
        })
    }
};