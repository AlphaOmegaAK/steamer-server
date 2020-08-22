const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    minlength: 4,
    maxlength: 25,
    required: [true, 'First Name Required'],
  },
  lastName: {
    type: String,
    minlength: 4,
    maxlength: 35,
  },
  email: {
    type: String,
    minlength: 8,
    maxlength: 45,
    trim: true,
    lowercase: true,
    unique: [true, 'email already in use'],
    required: [true, 'Please Enter a Valid Email'],
  },
  username: {
    type: String,
    minlength: 6,
    maxlength: 25,
    unique: [true, 'username is invalid'],
    required: [true, 'Username Required for Login']
  },
  password: {
    type: String,
    minlength: 6,
    maxlength: 15,
    required: [true, 'Please secure your account',],
  },
  avatar: {
    type: String,
  },
  location: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  post: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
}, { timestamps: true })

const User = mongoose.model('User', userSchema);
module.exports = User;
//TODO Stretch - show online | offline