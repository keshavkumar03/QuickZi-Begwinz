const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();

router.post('/signup',async(req,res)=>{

    const {username,password,email}=req.body;

    const existingUser=await User.findOne({email});
    if(existingUser) return res.status(400).json({message:'user already exists'});

    const hashPassword=await bcrypt.hash(password,10);
    const NewUser=new User({username,email,password:hashPassword});


    try {
       await NewUser.save();
       res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
        
    }
});

//login

router.post('/login',async(req,res)=>{

    const {email,password}=req.body;

    const user=await User.findOne({email});
    if(!user) return res.status(400).json({message:'Invalid Credentials!'})

    
    const IsMatch=await bcrypt.compare(password, user.password);
    if(!IsMatch) return res.status(400).json({message:'Invalid Credentials!'}) ;

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

//forgot password

router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;
  
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });
  
    // Implement logic to send password reset email
    // (Use a library like nodemailer to send emails)
    
    res.json({ message: 'Password reset email sent' });
  });
  
  module.exports = router;