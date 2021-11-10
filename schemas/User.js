const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  // _id: ObjectID
  role_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
  // ---or---
  // uploadID: {
  //  type: type: mongoose.Schema.Types.ObjectId,
  // }
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: Date,
});

module.exports = mongoose.model("UserSchema", UserSchema);
