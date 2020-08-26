
const express = require('express')
const app = express();
require('dotenv').config();
const cors = require('cors')
// const connectDB = require('./models')

const routes = require('./routes');

app.use(cors({
  origin: [`http://localhost:3000`],
  methods: "GET,POST,PUT,DELETE",
  optionsSuccessStatus: 200
}));
// app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} ${new Date().toLocaleTimeString()}`);
  next();
});



// Base Route
app.use('/', routes.base);
// Auth Routes
app.use('/api/v1/auth', routes.auth);
// Users Routes
app.use('/api/v1/users', routes.users);
// Post Routes
app.use('/api/v1/posts', routes.posts);




// connectDB()
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));