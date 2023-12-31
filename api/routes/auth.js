// const express = require('express');
const router =  require('express').Router();

const CryptoJS = require("crypto-js");
const User = require("../models/User");
const jwt = require("jsonwebtoken")


// REGISTRATION 
router.post("/register", async(req , res)=>{
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,

        //  Encrypting
        password:CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    });
          console.log(newUser)
    try {
        const user =await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
} );


// LOGIN 
router.post("/login" , async(req,res)=>{
try {
    const user = await User.findOne({email:req.body.email});

    !user && res.status(401).json("Wrong email or password");
  
    
    //  Decrypting
    const bytes  = CryptoJS.AES.decrypt( user.password , process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
         

    originalPassword  !== req.body.password && res.status(401).json("Wrong email or password");


    //   creating JSON webToken
        const accessWebToken = jwt.sign(
            { id: user._id , isAdmin: user.isAdmin },
            process.env.SECRET_KEY,
            {expiresIn: "5d"}
        );


    // after loging in password won't be seen 
    const {password, ...info} = user._doc;


    // if email and name comes to be correct
    res.status(201).json({...info , accessWebToken});

} catch (err) {
    // res.status(500).json(err);
    console.log(err); 
}



})

module.exports = router;