import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";

const secret = "test";

const auth = async (req, res, next) => {
  try {
    // console.log(req.headers.authorization);
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;
    let decodedData;
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, secret);
      // console.log(decodedData);
      const email = decodedData.email;
      const user = await UserModel.findOne({ email });
      req.userId = user?._id;
    } else {
      decodedData = jwt.decode(token);
      const googleId = decodedData?.sub.toString();
      const user = await UserModel.findOne({ googleId });
      req.userId = user?._id;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
