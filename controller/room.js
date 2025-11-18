import Room from "../models/Room.js";

export const createRoom = async (req, res) => {
  try {
    const { roomNo } = req.body;
    const room = await Room.create({ roomNo });
    console.log("room", room);
    res.status(200).send({
      message: "Room created successfully",
      status: true,
      data: room,
    });
  } catch (error) {
    res.status(200).send({
      message: error.message,
      status: false,
      data: null,
    });
  }
};

export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({
      message: "Rooms fetched successfully",
      status: true,
      data: rooms,
    });
  } catch (error) {
    console.error("Error fetching rooms:", error);
    res.status(500).json({
      message: error.message,
      status: false,
      data: null,
    });
  }
};
