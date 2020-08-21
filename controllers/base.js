const db = require('../models');


const home = (req, res) => {
  console.log('Home route');
  return res.status(200);
}
const about = (req, res) => {
  console.log('About route');
  return res.status(200);
};

const contact = (req, res) => {
  console.log('Contact route');
  return res.status(200);
};


module.exports = {
  home,
  about,
  contact
}