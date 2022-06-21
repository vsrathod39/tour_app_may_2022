import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";
import tourRouter from "./routes/tour.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(morgan("dev")); // morgan is a middleware that is used to log https request on console that is cmd prompt only
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/users", userRouter); // user signup route, this will work like http://localhost/5000/users/signup
app.use("/tours", tourRouter); // tour route, this will work like http://localhost/5000/users/signup
app.get("/", (req, res) => {
  return res.send("Welcome tour info api service");
});

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello express");
});

// connecting with mongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    // if database connected successfully then opening/listenenng server
    app.listen(port, () => {
      console.log(`server running on port number ${port}`);
    });
  })
  .catch((error) => {
    // if database not connected then catching the error and consoling it
    console.log(`${error} did not connect.`);
  });
