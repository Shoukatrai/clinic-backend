import express from "express";
import { doctorController, getDoctor } from "../controller/Doctor.js";
const router = express.Router();

router.post("/create",  doctorController)
router.get("/getAll",  getDoctor)


export default router;