import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

import { User } from "../models/user.model.js";
import { Course } from "../models/course.model.js";
import { Enrollment } from "../models/enrollment.model.js";

dotenv.config();
const hashedPassword = await bcrypt.hash("123456", 10);

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conexión a la base de datos exitosa");

    await User.deleteMany({});
    await Course.deleteMany({});
    await Enrollment.deleteMany({});
    console.log("Datos anteriores eliminados");

      // Admin
    const admin = await User.create({
      name: "Administrador",
      email: "admin@test.com",
      password: hashedPassword,
      role: "admin",
    });

    // Teachers
    const teachers = await User.insertMany([
      {
        name: "Juan Pérez",
        email: "juan@teacher.com",
        password: hashedPassword,
        role: "teacher",
      },
      {
        name: "María Gómez",
        email: "maria@teacher.com",
        password: hashedPassword,
        role: "teacher",
      },
    ]);

    // Students
    const students = await User.insertMany([
      {
        name: "Ana Torres",
        email: "ana@student.com",
        password: hashedPassword,
        role: "student",
      },
      {
        name: "Luis Castro",
        email: "luis@student.com",
        password: hashedPassword,
        role: "student",
      },
      {
        name: "Sofía Rojas",
        email: "sofia@student.com",
        password: hashedPassword,
        role: "student",
      },
    ]);

    // Courses
    const courses = await Course.insertMany([
      {
        name: "Desarrollo Web",
        description: "HTML, CSS, JavaScript y Node.js",
        teacherId: teachers[0]._id,
        category: "Programación",
        modality: "virtual",
        schedule: "Lunes y Miércoles 19:00 - 21:00",
      },
      {
        name: "Bases de Datos",
        description: "MongoDB y modelado de datos",
        teacherId: teachers[1]._id,
        category: "Tecnología",
        modality: "virtual",
        schedule: "Martes y Jueves 20:00 - 22:00",
      },
      {
        name: "Angular",
        description: "Desarrollo Frontend moderno",
        teacherId: teachers[0]._id,
        category: "Programación",
        modality: "virtual",
        schedule: "Sábados 09:00 - 13:00",
      },
    ]);

    // Enrollments
    await Enrollment.insertMany([
      {
        studentId: students[0]._id,
        courseId: courses[0]._id,
        status: "active",
      },
      {
        studentId: students[0]._id,
        courseId: courses[1]._id,
        status: "active",
      },
      {
        studentId: students[1]._id,
        courseId: courses[0]._id,
        status: "active",
      },
      {
        studentId: students[2]._id,
        courseId: courses[2]._id,
        status: "active",
      },
    ]);

    console.log("Seed ejecutado correctamente");
    console.log(`Admin creado: ${admin.email}`);

  }catch (error) {
    console.error("Error al sembrar los datos:", error);
  }
};

seedData().then(() => {
  mongoose.connection.close();
  console.log("Conexión a la base de datos cerrada");
});