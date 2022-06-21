import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";
import {
  createTour,
  deleteTour,
  getRelatedTours,
  getTour,
  getTours,
  getToursBySearch,
  getToursByTag,
  getToursByUser,
  likeTour,
  updateTour,
} from "../controllers/tour.js";

router.get("/", getTours); // finding all available tours
router.get("/search", getToursBySearch); // searching a tour by title
router.get("/tag/:tag", getToursByTag); // searching a tour by tags
router.post("/relatedtours", getRelatedTours); // searching related tourd of a tags
router.get("/:id", getTour); // finding single available tours

router.get("/usertours/:id", auth, getToursByUser); // dashboard endpoint for geting only user's tour data
router.post("/", auth, createTour); // add a tour
router.delete("/:id", auth, deleteTour);
router.patch("/:id", auth, updateTour);
router.patch("/like/:id", auth, likeTour);

export default router;
