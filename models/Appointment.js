import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    appointmentTime: { type: Date, required: true }, 
    duration: { type: Number, default: 30 }, 
    status: {
      type: String,
      enum: ["Booked", "Checked-In", "Completed", "Cancelled"],
      default: "Booked",
    },
    notes: { type: String }, 
  },
  { timestamps: true }
);

export default mongoose.model("Appointment", appointmentSchema);
