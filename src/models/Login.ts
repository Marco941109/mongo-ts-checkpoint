import { Schema, model } from "mongoose";

const loginSchema = new Schema({
  email: { type: String, required: true, unique: true },
});

export default model("Login", loginSchema); // ✅
