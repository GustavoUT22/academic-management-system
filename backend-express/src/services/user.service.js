import mongoose from "mongoose";
import { User } from "../models/user.model.js";

export const getUsersAsync = async () => {
  return await User.find();
};

export const getUserByIdAsync = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("Usuario no encontrado");
  }
  return user;
};

export const updateUserAsync = async (userId, updateData) => {
  const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
    new: true,
  });
  if (!updatedUser) {
    throw new Error("Usuario no encontrado");
  }
  return updatedUser;
};

export const deleteUserAsync = async (userId) => {
  const deletedUser = await User.findByIdAndDelete(userId);
  if (!deletedUser) {
    throw new Error("Usuario no encontrado");
  }
  return deletedUser;
};
