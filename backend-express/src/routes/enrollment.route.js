import express from "express";
import {
  enrollStudent,
  getEnrollmentsByStudent,
  updateEnrollmentStatus,
  getEnrollmentsByCourse,
} from "../controllers/enrollment.controller.js";

const router = express.Router();

router.post("/", enrollStudent);
router.get("/student/:studentId", getEnrollmentsByStudent);
router.patch("/:id/status", updateEnrollmentStatus);
router.get("/course/:courseId", getEnrollmentsByCourse);
