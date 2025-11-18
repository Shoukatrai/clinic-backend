import mongoose from "mongoose";

const medicalHistorySchema = new mongoose.Schema({
  appointment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Appointment",
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  notes: { type: String },
  prescription: { type: String },
  date: { type: Date, default: Date.now },
});

const patientSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
    contact: { type: String, required: true }, 
    cnic: { type: String, required: true, unique: true }, 
    age: { type: Number },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    appointments: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Appointment" },
    ],
    medicalHistory: [medicalHistorySchema],
  },
  { timestamps: true }
);

export default mongoose.model("Patient", patientSchema);
