import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    roomNo: { type: String, required: true, unique: true },
    appointmentCount: { type: Number, required: true, default: 0 },
    currentAppointment: { type: String, default: "" },
    currentAssignedDoctor: { type: String, default: "" },
    nextAvailableTime: { type: String, default: "" },
    notes: { type: String, default: "" },
    status: {
      type: String,
      enum: ["Available", "Occupied"],
      default: "Available",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Room", roomSchema);
