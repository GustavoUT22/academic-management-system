import mongoose from 'mongoose';

export const modalities = ['virtual', 'presencial'];

const courseSchema = new mongoose.Schema({
  name: {
      type: String,
      required: [true, 'El nombre del curso es obligatorio'],
      trim: true
  },
  description: {
      type: String,
      required: [true, 'La descripción es obligatoria']
  },
  teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, 'Un curso debe tener un docente asignado']
  },
  category: {
      type: String,
      required: [true, 'La categoría es obligatoria'],
      trim: true
  },
  modality: {
      type: String,
      enum: modalities,
      required: [true, 'La modalidad es obligatoria']
  },
  schedule: {
      type: String,
      required: [true, 'El horario es obligatorio']
  },
  isActive: {
      type: Boolean,
      default: true
  }
}, {
    timestamps: true
});

export const Course = mongoose.model('Course', courseSchema);