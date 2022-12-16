const express = require('express');
const { updateUser, deleteUser, getUser, getAllUser } = require('../controllers/user');
const { verifyAdmin } = require('../utils/verifyAdmin');
const { verifyToken} = require('../utils/verifyToken');
const { verifyUser } = require('../utils/verifyUser');


const router = express.Router();

/* 
router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("hello user, you are logged in")
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("hello user, you are logged in and you can delete your account")
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("hello admin, you are logged in and you can delete all account")
});
*/

//UPDATE
router.put("/:id",verifyUser, updateUser);

//DELETE
router.delete("/:id",verifyUser, deleteUser);

//GET
router.get("/:id",verifyUser, getUser);

//GETALL
router.get("/",verifyAdmin, getAllUser);

module.exports = router;