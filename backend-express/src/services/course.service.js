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
  const teacherExists = await User.findById(teacherId);
  if (!teacherExists) {
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
  console.log("Actualizando curso con ID:", courseId);
  const courseExists = await Course.findById(courseId);
  if (!courseExists) {
    throw new Error("Curso no encontrado");
  }

const updated = await Course

  console.log("Curso actualizado:", updatedCourse);
  return updatedCourse;
};


export const getCoursesAsync = async () => {
  return await Course.find();
}