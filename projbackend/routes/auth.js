// Import's
const { check } = require('express-validator');
var express = require('express')
var router = express.Router()
const {signout,signup} = require("../controllers/auth")

// Signup route
router.post("/signup",[
    check("name", "name should be atleast 3 char").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password should be atleast 5 char").isLength({ min: 5 })
],signup);

// Signout route
router.get("/signout",signout);

module.exports = router;
