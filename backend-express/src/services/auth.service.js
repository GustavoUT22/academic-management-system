import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import { User } from "../models/user.model.js";
import { roles } from "../models/user.model.js";

export const registerAsync = async ({ name, email, password, role }) => {
  const userExists = await User.findOne({ email });
  if (userExists) {
    const error = new Error("El correo ya está registrado");
    error.status = 400;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    name,
    email,
    password: hashedPassword,
    role: roles.includes(role) ? role : "student",
  });
  await user.save();
};

export const loginAsync = async ({ email, password }) => {
  const emailExists = await User.findOne({ email });
  const passwordMatch =
    emailExists && (await bcrypt.compare(password, emailExists.password));

  if (!emailExists || !passwordMatch) {
    const error = new Error("Correo o contraseña incorrectos");
    error.status = 401;
    throw error;
  }

  const token = jwt.sign(
    { userId: emailExists._id, role: emailExists.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );

  return token;
};
