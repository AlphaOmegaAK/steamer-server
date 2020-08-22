const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 50,
    minlength: 2,
    unique: [
      true, 'There\'s already a thread about this'],
    required: [
      true, 'Your Post needs a Title.'
    ]
  },
  topic: {
    type: String,
    maxlength: 50,
    minlength: 4,
    required: [
      true, 'You must be talking about something, what is it?'

    ]
  },
  body: {
    type: String,
    maxlength: 250,
    required: [
      true, 'Speak up please Your Are Important.'
    ]
  },
  comments: [
    {
      body: String,

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