import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";
import {
  createTour,
  deleteTour,
  getTour,
  getTours,
  getToursByUser,
  updateTour,
} from "../controllers/tour.js";

router.post("/", auth, createTour); // add a tour
router.get("/", getTours); // finding all available tours
router.get("/:id", getTour); // finding single available tours
router.get("/usertours/:id", auth, getToursByUser); // dashboard endpoint for geting only user's tour data
router.delete("/:id", auth, deleteTour);
router.patch("/:id", auth, updateTour);

export default router;
