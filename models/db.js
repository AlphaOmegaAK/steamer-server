const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = () => {
  const connection = process.env.MONGODB_URI || "mongodb://localhost:27017/steamerMERN"

  const config = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };



  mongoose.connect(connection, config)
    .then(() => console.log(`MongoDB Success connected to : ${connection}`))
    .catch(err => console.log(`MongoDb Failure ${err}`))
}
module.exports = connectDB, {

  User: require('./User'),
  Post: require('./Post'),
}