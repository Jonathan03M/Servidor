const router = require("express").Router();

const {
    getHome, 
    getUser,
    postHome, 
    putHome, 
    deleteHome} = require("../controllers/user.controllers.js")


router.get("/", getHome)

router.get("/user", getUser)

router.post("/user", postHome)

router.put("/update", putHome)

router.delete("/user", deleteHome)

module.exports = router;
