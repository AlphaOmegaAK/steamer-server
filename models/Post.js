const mongoose = require('mongoose');



const postSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 30,
    minlength: 10,
    unique: [
      true, 'There\'s already a thread about this'],
    required: [
      true, 'Your Post needs a Title.'
    ]
  },
  topic: {
    type: String,
    maxlength: 30,
    minlength: 10,
    required: [
      true, 'You must be talking about something, what is it?'

    ]
  },
  body: {
    type: String,
    maxlength: 250,
    required: [
      true, 'Speak up please'
    ]
  },
  comments: [
    {
      body: String,
      date: Date,
    }
  ],
  meta: {
    votes: Number,
    favs: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true })

const Post = mongoose.model('Post', postSchema);
module.exports = Post;