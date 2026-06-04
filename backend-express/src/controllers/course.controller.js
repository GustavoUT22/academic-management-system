import * as courseService from "../services/course.service.js";

const createCourse = async (req, res) => {
  try {
    await courseService.createCourseAsync(req.body);
    res.status(201).json({ message: "Curso creado exitosamente" });
    
  }
    catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
}
