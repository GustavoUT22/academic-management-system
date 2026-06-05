import * as courseService from "../services/course.service.js";

export const createCourse = async (req, res) => {
  try {
    await courseService.createCourseAsync(req.body);
    res.status(201).json({ message: "Curso creado exitosamente" });
    
  }
    catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
}

export const updateCourse = async (req, res) => {
  try {
    console.log(req.body);
    await courseService.updateCourseAsync(req.params.id, req.body);
    res.status(200).json({ message: "Curso actualizado exitosamente" });

  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
}

export const getCourses = async (req, res) => {
  try {
    const courses = await courseService.getCoursesAsync();
    res.status(200).json(courses);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
}