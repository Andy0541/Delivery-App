import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Login user
const loginUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    // checking is user already exists
    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.json({ success: false, message: "User alredy exists" });
    }
  } catch (error) {}
};

// Register user
const registerUser = async (req, res) => {};

export { loginUser, registerUser };
