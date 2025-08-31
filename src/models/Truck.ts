import { Schema, model } from "mongoose";

const truckSchema = new Schema({
  plate: { type: String, required: true, unique: true },
  model: { type: String, required: true },
  capacity: { type: Number, required: true },
});

export default model("Truck", truckSchema);
