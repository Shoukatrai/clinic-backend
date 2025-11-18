import Doctor from "../models/Doctor.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import User from "../models/User.js";
import { generateDoctorPassword } from "../utils/randomPassword.js";
import { loginEmail } from "../templates/loginEmail.js";

export const doctorController = async (req, res) => {
  try {
    const { name, email, specialty, contact, schedule, status } = req.body;

    if (!name || !email || !specialty || !contact) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const doctor = await Doctor.create({
      name,
      email,
      specialty,
      contact,
      schedule: schedule || [],
      status: status || "active",
    });

    const user = await User.findOne({ email: email });
    if (user) {
      return res.json({
        message: "Doctor added but User already exists",
        status: false,
        data: null,
      });
    }

    const password = await generateDoctorPassword(name, email);
    console.log("password", password);
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashedPassword", name, email, specialty, contact);
    const response = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "doctor",
    });
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.USER_EMAIL,
      to: email,
      subject: "Login Credentials",
      html: loginEmail(name, email, password),
    };

    const emailResponse = await transporter.sendMail(mailOptions);
    res.status(201).json({
      message: "Doctor Added!",
      status: true,
      data: [doctor, response],
    });
  } catch (error) {
    console.error("Error creating doctor:", error);
    res.status(500).json({
      message: error.message,
      status: false,
      data: null,
    });
  }
};

export const getDoctor = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json({
      message: "Doctors fetched successfully",
      status: true,
      data: doctors,
    });
  } catch (error) {
    console.error("Error fetching doctors:", error);
    res.status(500).json({
      message: error.message,
      status: false,
      data: null,
    });
  }
};
