const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');

//Enable cors
app.use(cors());
//Middleware to parse JSON data
app.use(express.json());

// Connect to MongoDB database
mongoose.connect("mongodb+srv://djeutio1234:djeutio@cluster0.rxtzo4f.mongodb.net/portfolioDB")
  .then((result) => console.log('Connected successfully to mongoDB'))
  .catch((err) => console.log('error connecting to mongoDB:', err));

//Require routes to fetch data review form
app.use("/", require("./routes/routes.jsx"));

//Define a route a fetch the data testimonial and portfolio
app.use('/api', require('./routes/app.route'));

// Start the server
app.listen(3001, function(){
  console.log('Server started on port 3001 for Review');
})

//start the server for portf and test
app.listen(8000, ()=>{
    console.log('server started on port 8000 for P & T');
})
