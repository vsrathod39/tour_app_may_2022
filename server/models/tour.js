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
  likes: {
    type: [String],
    default: [],
  },
});

const TourModel = mongoose.model("Tour", tourSchema);

export default TourModel;
