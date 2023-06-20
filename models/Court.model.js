const { Schema, model } = require("mongoose");

const courtSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  picture_url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Court = model("Court", courtSchema);

module.exports = Court;
