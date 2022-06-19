import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";
import { createTour, getTours } from "../controllers/tour.js";

router.post("/", auth, createTour); // add a tour
router.get("/", getTours); // finding all available tours

export default router;
