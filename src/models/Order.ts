import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  description: { type: String, required: true },
  truckId: { type: Schema.Types.ObjectId, ref: "Truck", required: true },
  locationId: { type: Schema.Types.ObjectId, ref: "Location", required: true },
});

export default model("Order", orderSchema);
