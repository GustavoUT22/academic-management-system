import mongoose from 'mongoose'
import { Course } from '../models/course.model.js';
import { modalities } from '../models/course.model.js';

const createCourseAsync = async ({
  name,
  description,
  category,
  teacherId,
  modality,
  schedule,
}) => {
  const teacherExists = await User.findById(teacherId);
  if (!teacherExists) {
    throw new Error('El docente asignado no existe');
  }
  const newCourse = new Course({
    name,
    description,
    category,
    teacherId,
    schedule,
    modality: modalities.includes(modality) ? modality : 'virtual',
  })
  await newCourse.save();
  return newCourse;
};
