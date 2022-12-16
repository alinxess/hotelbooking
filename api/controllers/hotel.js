const Hotel = require('../models/Hotel');
const Room = require('../models/Room');

module.exports = {
    async createHotel(req, res, next){
       const newHotel = new Hotel(req.body)

       try {

         const savedHotel = await newHotel.save()
         res.status(200).json(savedHotel) 

        } catch (error) {
          //res.status(500).json(error)
          next(error)
        }
    },

    async updateHotel(req, res, next){
        try {
        
            const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true})
            res.status(200).json(updatedHotel) 
      
          } catch (error) {
              //res.status(500).json(error)
              next(error)
          }
    },

    async deleteHotel(req, res, next){
        try {
        
            await Hotel.findByIdAndDelete(req.params.id)
            res.status(200).json("Hotel has been deleted") 
      
          } catch (error) {
              //res.status(500).json(error)
              next(error)
          }    
    },

    async getHotel(req, res, next){
        try {
        
            const hotel = await Hotel.findById(req.params.id)
            res.status(200).json(hotel) 
      
          } catch (error) {
              //res.status(500).json(error)
              next(error)
          }     
    },

    async getAllHotel(req, res, next){
        const {min, max, ...others}= req.query;
        try {
        
            const hotels = await Hotel.find({...others, cheapestPrice:{$gt:min | 1 , $lt:max || 999 }}).limit(req.query.limit)
            res.status(200).json(hotels) 
      
          } catch (error) {
              //res.status(500).json(error)
              next(error)
          }  
    },

    async countByCity(req, res, next){
        const cities = req.query.cities.split(",")
        try {
        
            const list = await Promise.all(cities.map(city=>{
                return Hotel.countDocuments({city:city})  //countDocuments -> mongodb
            }))
            res.status(200).json(list) 
      
          } catch (error) {
              //res.status(500).json(error)
              next(error)
          }  
    },

    async countByType(req, res, next){
    
        try {
            const hotelCount = await Hotel.countDocuments({type:"hotel"}) 
            const apartmentCount = await Hotel.countDocuments({type:"apartment"}) 
            const resortCount =await Hotel.countDocuments({type:"resort"}) 
            const villaCount = await Hotel.countDocuments({type:"villa"}) 
            const cabinCount = await Hotel.countDocuments({type:"cabin"}) 
            
            res.status(200).json([
                {type:"hotel", count:hotelCount},
                {type:"apartment", count:apartmentCount},
                {type:"resort", count:resortCount},
                {type:"villa", count:villaCount},
                {type:"cabin", count:cabinCount},
            ]); 
      
          } catch (error) {
              //res.status(500).json(error)
              next(error)
          }  
    },

    async getHotelRooms(req, res, next){
        try {
           const hotel = await Hotel.findById(req.params.id);
           const list = await Promise.all(hotel.rooms.map(room => {
               return Room.findById(room);
           }));
           res.status(200).json(list);
        } catch (error) {
            next(error)
        }
    }


}