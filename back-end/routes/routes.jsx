const express = require("express");
const router = express.Router();
const User = require("../models/models.jsx");

//configure route to get data from the frontend
router.route("/create").post((req, res) => {
    const name = req.body.name; //parsing the fronend request name to dbname
    const email = req.body.email;
    const review = req.body.review;
    
    const newUser = new User({
      name,      
      email,
      review,
    });
    newUser.save();
});

  module.exports = router;