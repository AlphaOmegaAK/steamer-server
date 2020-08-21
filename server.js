//! 1

const express = require('express')
const app = express();
require('dotenv').config();
const cors = require('cors')
// const connectDB = require('./models')

const routes = require('./routes');

app.use(cors({
  origin: [`http://localhost:4000`],
  methods: "GET,POST,PUT,DELETE",
  optionsSuccessStatus: 200
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// 
// Base Route
app.use('/', routes.base);
// Auth Routes
app.use('/auth', routes.auth);
// Post Routes
// app.use('/posts', routes.posts);




// connectDB()
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));