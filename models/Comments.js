const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  body: {
    type: String,
    required: [
      true, 'There Must Be Content in a Comment'
    ],
  },
  post: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ],
}, { timestamps: true })

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;