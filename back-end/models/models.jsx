const mongoose = require("mongoose");

//creating a schema
const UserSchema = {
    name: String,
    email: String,
    review: String    
  }  
  const User = mongoose.model("User", UserSchema);
  
  module.exports = User;