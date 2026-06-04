import mongoose from "mongoose";

const statuses = ["active", "completed", "dropped"];

const enrollmentSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  enrolledAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: statuses,
    default: "active",
  },
});

enrollmentSchema.index(
  { studentId: 1, courseId: 1 },
  { unique: true }
);

export const Enrollment = mongoose.model("Enrollment", enrollmentSchema);