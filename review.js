import { authenticate, patientAuth } from "../auth/verifyToken.js";
import { createReview, getAllReview } from "../controllers/reviewController.js";
import express from "express";

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(getAllReview)
  .post(authenticate, patientAuth, createReview);

export default router;
