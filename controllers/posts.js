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
    // populate() + exec
    res.status(200).send(foundPost)
  });
};

// ! -----  Posts Create  -----
// const create = (req, res) => {
//   const userId = req.params.id
//   db.Post.create(req.body, (err, newPost) => {
//     if (err) console.log('Error in Post#create:', err);
//     console.log(newPost);
//     db.User.findById(userId, (err, foundUser) => {
//       if (err) console.log('Error In finding User to New Post:', err);
//       console.log(foundUser);
//       foundUser.post.push(newPost);

//       foundUser.save((err, savedUser) => {
//         if (err) console.log('Error in saving Post to User:', err);
//         console.log('User:', savedUser);
//       })
//     })
//     // check with console.log for post id
//     // Change newPost varible to look at newPostId and save that to Found User
//     res.status(200).json({ message: 'Post created' });
//   });
// };

const create = (req, res) => {
  db.Post.create(req.body, (err, newPost) => {
    if (err) console.log('Error in Post Creation:', err);
    console.log(newPost);
    res.status(200).json({ message: 'Post Created !' });
  })
}


// ! -----  Posts Update  -----
const update = (req, res) => {
  db.Post.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatePost) => {
    if (err) console.log('Error in post#update:', err);

    if (!updatePost) {
      res.status(400).json({ message: `Could\'t find Post with Id ${req.params.id}` });
    }

    res.json(updatePost)
  });
};
// ? Better User Updated Post 
// const update = (req, res) => {
//   db.Post.findByIdAndUpdate(req.params.id, req.body, { new: true },
//     (err, updatedPost) => {
//       if (err) console.log('Error in User Update Post', err);
//       db.User.findOne({ 'posts': req.params.id }, (err, foundUser) => {
//         if (foundUser._id.toString() !== req.body.UserId) {
//           res.status(400).json({ message: `Couldn\'t find Post with Id ${req.params.id}` })
//           foundUser.posts.remove(req.params.id);
//           foundUser.save((err, savedUser) => {
//             db.User.findById(req.body.userId, (err, newUser) => {
//               newUser.posts.push(updatedNewUser)
//               newUser.save((err, savedNewUser) => {
//                 res.status(200).json({ message: 'Updated Post (postsUpdatedController' })
//               })
//             })
//           })
//         }
//       })
//     })
// }


// ! -----  Posts Delete  -----
const destroy = (req, res) => {
  db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
    if (err) console.log('Error in Posts#destory:', err);

    res.status(200).json({ message: 'Post Deleted' })
  });
};

// ? Updated Posts Delete For User
// router.delete('/:id', (req, res) => {
//   db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
//     if (err) return console.log(err);
//     console.log(deletedPost);
//     db.User.findOne({ 'posts': req.params.id }, (err, foundUser) => {
//       foundUser.posts.remove(req.params.id);
//       foundUser.save((err, foundUser) => {
//         console.log(foundUser);
//         res.redirect('/posts');
//       })
//     })
//   });
// });

module.exports = {
  index, show, create, update, destroy
}