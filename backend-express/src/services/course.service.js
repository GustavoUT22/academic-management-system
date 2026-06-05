import mongoose from "mongoose";
import { Course } from "../models/course.model.js";
import { modalities } from "../models/course.model.js";

export const createCourseAsync = async ({
  name,
  description,
  category,
  teacherId,
  modality,
  schedule,
}) => {
  const teacher = await User.findById(teacherId);
  if (!teacher || teacher.role !== "teacher") {
    throw new Error("El docente asignado no existe");
  }
  const newCourse = new Course({
    name,
    description,
    category,
    teacherId,
    schedule,
    modality: modalities.includes(modality) ? modality : "virtual",
  });
  await newCourse.save();
  return newCourse;
};

export const updateCourseAsync = async (courseId, updateData) => {
  const updatedCourse = await Course.findByIdAndUpdate(courseId, updateData, {
    new: true,
    runValidators: true,
  });

  if (!updatedCourse) {
    throw new Error("Curso no encontrado");
  }

  return updatedCourse;
};

//TO-DO: Add query parameters for filtering, pagination, etc.
export const getCoursesAsync = async () => {
  return await Course.find();
};

export const deactivateCourseAsync = async (courseId) => {
  const course = await Course.findById(courseId);
  if (!course) {
    throw new Error("Curso no encontrado");
  }

  course.isActive = false;
  await course.save();
};

export const getCourseByIdAsync = async (courseId) => {
  const course = await Course.findById(courseId);
  if (!course) {
    throw new Error("Curso no encontrado");
  }
  return course;
};

export const activateCourseAsync = async (courseId) => {
  const course = await Course.findById(courseId);
  if (!course) {
    throw new Error("Curso no encontrado");
  }
  course.isActive = true;
  await course.save();
};
