const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  reviewId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  datetime: {
    type: Date,
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
