const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

//Setting Up Signing Up Module

router.post("/register", async (req, res) => {
  try {
    const {email, username, password, image} = req.body;
    const hashpassword = bcrypt.hashSync(password);

    const user = new User({email, username, password: hashpassword, image});
    await user.save();
    res.status(200).json({user});
  } catch (error) {
    console.log(error);
    res.status(400).json({message: "User Already Exists"});
  }
});

// For Login

router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) {
      res.status(400).json({message: "Please Sign Up First"});
    }

    const ispasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!ispasswordCorrect) {
      res.status(400).json({message: "Incorrect Password"});
    }
    const {password, ...others} = user._doc;
    res.status(200).json({others});
  } catch (error) {
    console.log(error);
    res.status(400).json({message: "User Already Exists"});
  }
});
module.exports = router;
