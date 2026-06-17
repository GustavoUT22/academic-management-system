import * as enrollmentService from '../services/enrollment.service.js';

export const enrollStudent = async (req, res) => {
  try {
    await enrollmentService.enrollStudentAsync(req.body);
    res.status(201).json({ message: "Estudiante inscrito exitosamente" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const getEnrollmentsByStudent = async (req, res) => {
  try {
    const enrollments = await enrollmentService.getEnrollmentsByStudentAsync(req.params.studentId);
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const updateEnrollmentStatus = async (req, res) => {
  try {
    await enrollmentService.updateEnrollmentStatusAsync(req.params.id, req.body.status);
    res.status(200).json({ message: "Estado de inscripción actualizado exitosamente" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const getEnrollmentsByCourse = async (req, res) => {
  try {
    const enrollments = await enrollmentService.getEnrollmentsByCourseAsync(req.params.courseId);
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};
