const express = require('express');
const { createRoom, updateRoom, deleteRoom, getRoom, getAllRoom, updateRoomAvailabilty } = require('../controllers/room');
const { verifyAdmin } = require('../utils/verifyAdmin');

const router = express.Router();

//CREATE
router.post("/:hotelid",verifyAdmin, createRoom);

//UPDATE
router.put("/:id",verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailabilty);

//DELETE
router.delete("/:id/:hotelid",verifyAdmin, deleteRoom);
 
//GET
router.get("/:id", getRoom);

//GETALL
router.get("/", getAllRoom);



module.exports = router;