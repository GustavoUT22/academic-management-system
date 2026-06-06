import statuses from "../config/enrollmentStatuses.js";
import mongoose from "mongoose";
import { Enrollment } from "../models/enrollment.model.js";
import { User } from "../models/user.model.js";
import { Course } from "../models/course.model.js";

export const createEnrollmentAsync = async (enrollmentData) => {
  const { studentId, courseId } = enrollmentData;
  const student = await User.findById(studentId);
  if (!student || student.role !== "student") {
    throw new Error("El estudiante no existe");
  }

  const course = await Course.findById(courseId);
  if (!course || !course.isActive) {
    throw new Error("El curso no existe o no está activo");
  }

  const newEnrollment = new Enrollment({
    studentId,
    courseId,
    status: "enrolled",
  });

  await newEnrollment.save();
  return newEnrollment;
};

export const getEnrollmentsByStudentAsync = async (studentId) => {
  return await Enrollment.find({ studentId });
};

export const getEnrollmentsByCourseAsync = async (courseId) => {
  return await Enrollment.find({ courseId });
};

export const updateEnrollmentStatusAsync = async (enrollmentId, status) => {
  if (!statuses.includes(status)) {
    throw new Error("Estado de inscripción no válido");
  }
  const enrollment = await Enrollment.findById(enrollmentId);
  if (!enrollment) {
    throw new Error("Inscripción no encontrada");
  }

  enrollment.status = status;
  await enrollment.save();
}