const express = require('express');
const { createHotel, updateHotel, deleteHotel, getHotel, getAllHotel, countByCity, countByType, getHotelRooms } = require('../controllers/hotel');
const Hotel = require('../models/Hotel');
const { verifyAdmin } = require('../utils/verifyAdmin');


const router = express.Router();

//CREATE
router.post("/",verifyAdmin, createHotel);

//UPDATE
router.put("/:id",verifyAdmin, updateHotel);

//DELETE
router.delete("/:id",verifyAdmin, deleteHotel);

//GET
router.get("/find/:id", getHotel);

//GETALL
router.get("/", getAllHotel);

router.get("/countByCity", countByCity);

router.get("/countByType", countByType);

router.get("/room/:id", getHotelRooms);

module.exports = router;