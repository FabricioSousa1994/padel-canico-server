const {Schema, model} = require("mongoose");

const bookSchema = ({
    user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    },
    court: {
        type: Schema.Types.ObjectId,
        ref: "Court"
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

const Book = model("Book", bookSchema);

module.exports = Book;