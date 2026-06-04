import mongoose from "mongoose";

const rolesAvailable = ["student", "teacher", "admin"];

export const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "El correo es obligatorio"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "La contraseña es obligatoria"],
    },
    role: {
      type: String,
      enum: {
        values: rolesAvailable,
      },
      default: "student",
    },
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.model("User", userSchema);