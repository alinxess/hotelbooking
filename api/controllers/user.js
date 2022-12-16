const User = require('../models/User');

module.exports = {
    
    async updateUser(req, res, next){
        try {
        
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true})
            res.status(200).json(updatedUser) 
      
          } catch (error) {
              //res.status(500).json(error)
              next(error)
          }
    },

    async deleteUser(req, res, next){
        try {
        
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User has been deleted") 
      
          } catch (error) {
              //res.status(500).json(error)
              next(error)
          }    
    },

    async getUser(req, res, next){
        try {
        
            const user = await User.findById(req.params.id)
            res.status(200).json(user) 
      
          } catch (error) {
              //res.status(500).json(error)
              next(error)
          }     
    },

    async getAllUser(req, res, next){
        try {
        
            const users = await User.find()
            res.status(200).json(users) 
      
          } catch (error) {
              //res.status(500).json(error)
              next(error)
          }  
    }


}