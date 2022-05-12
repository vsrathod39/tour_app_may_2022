import express from "express";
const router = express.Router();
import { signup, signin } from "../controllers/user.js";

router.post("/signup", signup); // signup routing
router.post("/signin", signin); // signin routing

export default router;
