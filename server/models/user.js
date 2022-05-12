import mongoose from "mongoose";

//user schema for login method
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: false }, //if using google signin then can not be store password
  googleId: { type: String, required: false }, //if using google signin then can not be store id
  id: { type: String },
});

export default mongoose.model("User", userSchema);
