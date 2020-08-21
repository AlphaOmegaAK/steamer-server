const db = require('../models');


const home = (req, res) => {
  console.log('</h1>Home Route</h1>');
}
const about = (req, res) => {
  res.send('</h1>About Route</h1>');
};

const contact = (req, res) => {
  res.send('</h1>Contact Route</h1>');
};


module.exports = {
  home,
  about,
  contact
}