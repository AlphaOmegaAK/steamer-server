const db = require('../models');

// ! -----  Users index  -----
const index = (req, res) => {
  db.User.find({}, (err, foundUser) => {
    if (err) console.log('Error in Users Index:', err);
    console.log(Object.values(Users));  // ! <<<<<<<<<<<<<<
    res.status(200).json(foundUser);
  });
};

// ! -----  Users show  -----
const show = (req, res) => {
  db.User.findById(req.params.id, (err, foundUser) => {
    if (err) console.log('Error Finding Users:', err);

    res.status(200).send(foundUser);
  });
};

// ! -----  Users create  -----
const create = (req, res) => {
  db.User.create(req.body, (err, savedUser) => {
    if (err) console.log('Error Creating User:', err);

    res.status(200).send(savedUser);
  });
};

// ! -----  Users update  -----
const update = (req, res) => {
  db.User.findByIdAndUpdate(req.params.id, { new: true }, (err, updatedUser) => {
    if (err) console.log('Error in Updating User:', err);

    if (!updatedUser) {
      res.status(400).json({ message: `Couldn\'t find User with ID ${req.params.id}` });
    }

    res.json(updatedUser)
  });
};

// ! -----  Users delete  -----
const destroy = (req, res) => {
  db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
    if (err) console.log('Error in Deleting User:', err);

    res.status(200).json(deletedUser);
  });
};


module.exports = {
  index,
  show,
  create,
  update,
  destroy
}