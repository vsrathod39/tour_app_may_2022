import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";

const secret = "test";

export const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body; // destructring request body
  try {
    const oldUser = await UserModel.findOne({ email }); // checking if user is present in db or not
    if (oldUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 12); // generating hashed password
    const result = await UserModel.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    }); // creating new user in db
    const token = jwt.sign({ email: result.email, id: result.id }, secret, {
      expiresIn: "1h",
    }); // generating token
    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};
