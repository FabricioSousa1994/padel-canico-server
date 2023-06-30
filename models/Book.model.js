const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    court: {
      type: Schema.Types.ObjectId,
      ref: "Court",
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  {timestamps: true}
  );

const Book = model("Book", bookSchema);

module.exports = Book;
