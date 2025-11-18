import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
  day: {
    type: String,
    enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    required: true,
  },
  startTime: { type: String, required: true, default: "10:00 AM" },
  endTime: { type: String, required: true, default: "08:00 PM" },
});

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    specialty: { type: String, required: true },
    contact: { type: String, required: true },
    schedule: [scheduleSchema],
    status: { type: String, enum: ["active", "inactive"], default: "active" },
  },
  { timestamps: true }
);

export default mongoose.model("Doctor", doctorSchema);