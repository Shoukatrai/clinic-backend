import express from "express";
import { createRoom, getRooms } from "../controller/room.js";
const router = express.Router();

router.post("/create", createRoom);
router.get("/getAll", getRooms);

export default router;
