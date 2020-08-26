const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models')

// ! -----  Register Controller  -----
const register = async (req, res) => {
  console.log('Register Success')
  console.log(req.body);
  if (!req.body.username || !req.body.email || !req.body.password || !req.body.firstName) {
    // TODO Switch Statment for better edge case

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


// ! -----  Login Controller  -----
const login = async (req, res) => {
  console.log(req.body);
  console.log('Login Success!')
  try {
    const foundUser = await db.User.findOne({ email: req.body.email });
    if (!foundUser) {
      return res.status(400).json({
        status: 400,
        message: 'Email or Password are Incorrect'
        // TODO Switch Statment for better edge case
      });
    }
    const passMatch = await bcrypt.compare(req.body.password, foundUser.password);
    if (!passMatch) {
      return res.status(400).json({
        status: 400,
        message: 'Passwords Do not Match'
      });
    }
    const payload = { id: foundUser._id };
    const secret = process.env.JWT_SECRET;
    const expiration = { expiresIn: "1h" };

    const token = await jwt.sign(payload, secret, expiration);

    res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong with Login. Please Try Again",
    });
  }
};


// ! -----  Verify Controller  -----
const verify = (req, res) => {
  jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
    if (err || !decodedUser) {
      return res.status(401).json({
        message: 'Your Shall Not Pass!'
      });
    }
    req.currentUser = decodedUser;
    res.status(200).json({ user: decodedUser })
    next()
  })
}



module.exports = {
  register, login, verify
};