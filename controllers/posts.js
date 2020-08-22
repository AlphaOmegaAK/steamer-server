const db = require('../models');

//!  -----  Posts Index  -----
const index = (req, res) => {
  db.Post.find({}, (err, foundPost) => {
    if (err) console.log('Error in Post#index:', err);

    res.status(200).json(foundPost);
  });
};
// TODO -- Do check of found posts, if length 0 then sends back : no posts

// ! -----  Posts Show  -----
const show = (req, res) => {
  db.Post.findById(req.params.id, (err, foundPost) => {
    if (err) console.log('Error in Posts#show:', err);

    res.status(200).send(foundPost)
  });
};

// ! -----  Posts Create  -----
const create = (req, res) => {
  db.Post.create(req.body, (err, savedPost) => {
    if (err) console.log('Error in Post#create:', err);

    res.status(200).json(savePost);
  });
};

// ! -----  Posts Update  -----
const update = (req, res) => {
  db.Post.findByIdAndUpdate(req.params.id, { new: true }, (err, updatedPost) => {
    if (err) console.log('Error in post#update:', err);

    if (!updatePost) {
      res.status(400).json({ message: `Could\'t find Post with Id ${req.params.id}` });
    }

    res.json(updatedPost)
  });
};

// ! -----  Posts Delete  -----
const destroy = (req, res) => {
  db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
    if (err) console.log('Error in Posts#destory:', err);

    res.status(200).json(deletedPost)
  });
};

module.exports = {
  index, show, create, update, destroy
}