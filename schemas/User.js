const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  restaurant_name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  stripe_id: {
    type: String,
    required: true,
  },
  charge_amount: {
    type: String,
    required: true,
  },
  website: String,
  social_media: String,
  num_110: {
    type: Boolean,
    default: false,
  },
  num_110_plugs: String,
  total_amps_110: String,
  num_220: {
    type: Boolean,
    default: false,
  },
  num_220_plugs: String,
  total_amps_220: String,
  restaurant_equipment: String,
  trailer_size: String,
  trailer_type: String,
  menu_items: String,
  signature: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: Date,
});

module.exports = mongoose.model("UserSchema", UserSchema);
