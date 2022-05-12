import express from "express";
const router = express.Router();
import { signup } from "../controllers/user.js";

router.post("/signup", signup); // signup routing

export default router;
