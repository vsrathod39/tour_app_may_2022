import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";

const app = express();

app.use(cors());
app.use(morgan("dev")); // morgan is a middleware that is used to log https request on console that is cmd prompt only
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/users", userRouter); // user signup route, this will work like http://localhost/5000/users/signup

const mongoDbURL =
  "mongodb+srv://tourappmay2022:VTzSswnrN4nQvnbk@cluster0.hwkx9.mongodb.net/tourDB?retryWrites=true&w=majority";
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello express");
});

// connecting with mongoDB
mongoose
  .connect(mongoDbURL)
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
