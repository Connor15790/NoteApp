const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "ThreeSwordStyle";

router.post("/getuser", [
    body("name", "Enter a valid name.").isLength({ min: 3 }),
    body("email", "Enter a valid Email.").isEmail(),
    body("password", "Enter a valid password.").isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // Check whether the user with this email already exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry, a user with this email already exists." })
        }
        
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        });
        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);
        
        res.json({authToken})

        // res.json(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured.")
    }
})

router.post("/login", [
    body("email", "Enter a valid Email.").isEmail(),
    body("password", "Password cannot be blank.").exists(),
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;

    try {
        let user = await User.findOne({email});
        if (!user) {
            success = false;
            return res.status(400).json({error: "Please enter the correct credentials."});
        }

        const passCompare = await bcrypt.compare(password, user.password);
        if (!passCompare) {
            success = false;
            return res.status(400).json({success, error: "Please enter the correct credentials."});
        }

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({success, authToken})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})

router.post("/fetchuser", fetchuser, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})

module.exports = router;