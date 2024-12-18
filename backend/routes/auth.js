import express from "express";
import { loginUser, signupUser, logoutUser } from "../controllers/auth.js";

const router = express.Router();

router.post("/signup", signupUser);

router.post("/login", loginUser);

router.post("/logout", logoutUser);

export default router;
