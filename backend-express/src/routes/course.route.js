import express from 'express';
import { createCourse, updateCourse, getCourses } from "../controllers/course.controller.js";

const router = express.Router();

router.post("/", createCourse)
router.get("/", getCourses)
router.put("/:id", updateCourse)

export default router;