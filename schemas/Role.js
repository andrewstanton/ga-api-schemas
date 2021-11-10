const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
  // _id: ObjectID
  name: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },

  // Permissions
  announcment_permission: {
    type: Boolean,
    default: false,
  },
  db_access_permission: {
    type: Boolean,
    default: false,
  },
  knowledge_base_permission: {
    type: Boolean,
    default: false,
  },
  tickets_permission: {
    type: Boolean,
    default: false,
  },
  user_roles_permission: {
    type: Boolean,
    default: false,
  },
  db_copy_permission: {
    type: Boolean,
    default: false,
  },
  logs_permission: {
    type: Boolean,
    default: false,
  },
  email_trace_permission: {
    type: Boolean,
    default: false,
  },
  // End Of Permissions

  predefined: {
    type: Boolean,
    default: false,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: Date,
});

module.exports = mongoose.model("RoleSchema", RoleSchema);
