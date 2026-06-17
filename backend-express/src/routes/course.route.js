import express from "express";
import {
  createCourse,
  updateCourse,
  getCourses,
  deactivateCourse,
  activateCourse,
  getCourseById,
} from "../controllers/course.controller.js";

const router = express.Router();

router.post("/", createCourse);
router.get("/", getCourses);
router.put("/:id", updateCourse);
router.patch("/:id/deactivate", deactivateCourse);
router.patch("/:id/activate", activateCourse);
router.get("/:id", getCourseById);

export default router;
