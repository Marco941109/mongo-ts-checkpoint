import { Schema, model } from "mongoose";

const locationSchema = new Schema({
  city: { type: String, required: true },
  address: { type: String, required: true },
});

export default model("Location", locationSchema);
