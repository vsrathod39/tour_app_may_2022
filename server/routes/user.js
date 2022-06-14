import express from "express";
const router = express.Router();
import { signup, signin, googlesignin } from "../controllers/user.js";

router.post("/signup", signup); // signup routing
router.post("/signin", signin); // signin routing
router.post("/googlesignin", googlesignin); // Google SignIn

export default router;
