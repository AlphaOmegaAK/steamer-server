const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models')



// Register Controller
const register = async (req, res) => {
  const rb = req.body
  if (!req.body.username || !req.body.email || !req.body.password || !req.body.firstName) {
    return res.status(400).json({ message: 'All Fields Are Required To Register. Please Try Again.' });
  }
  if (req.body.password.length < 6) {
    return res.status(400).json({ message: 'Password Must Be At Least 6 Characters Long' });
  }
  try {
    const foundUser = await db.User.findOne({ email: req.body.email });
    if (foundUser) {
      res.status(400).json({
        status: 400,
        message: 'Email Address Has Already Been Taken, Try A Different Email'
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    await db.User.create({ ...req.body, password: hash });
    return res.status(201).json({ status: 201, message: 'Success' });
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      status: 500,
      message: 'Something went wrong, Please Try Again.'
    });
  }
};





// Login Controller
const login = (req, res) => {

}





// Verify Controller
const verify = (req, res) => {

}



module.exports = {
  register, login, verify
};