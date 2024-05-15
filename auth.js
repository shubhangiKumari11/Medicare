import express from "express";
import { login, registerUser } from "./../controllers/authController.js";
import { support } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);
router.post("/contact",support)
export default router;
