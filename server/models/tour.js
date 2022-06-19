import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  title: String,
  discription: String,
  name: String,
  creator: String,
  tags: [String],
  imageFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  likeCount: {
    type: Number,
    default: 0,
  },
});

const TourModel = mongoose.model("Tour", tourSchema);

export default TourModel;
