import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import doctorRouter from "./routes/doctor.js";
import roomRouter from "./routes/room.js";
import cors from "cors";

dotenv.config();

connectDb();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/doctor", doctorRouter);
app.use("/api/room", roomRouter);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

export default app;
