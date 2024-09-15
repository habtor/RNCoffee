import express from "express";
import { getAllUser, getLoggedInUser } from "../controllers/users.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/", getAllUser);
router.get("/:id", protectRoute, getLoggedInUser);
// router.post("/:id", protectRoute, addUserToContacts);

export default router;
