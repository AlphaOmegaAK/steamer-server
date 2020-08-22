const mongoose = require('mongoose');

// console.log('MONGO_DB =', process.env.MONGODB_URI);

const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017/MERN";
const configOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.connect(connectionString, configOptions)
  .then(() => console.log('MongoDB successfully connected'))
  .catch(err => console.log(`MongoDB connection error: ${err}`));


module.exports = {
  User: require('./User'),
  Post: require('./Post'),
}
