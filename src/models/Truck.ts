import { Schema, model } from "mongoose";



export interface ITruck extends Document {
  user: Schema.Types.ObjectId;
  year: string;
  color: string;
  plates: string;
}

const truckSchema = new Schema<ITruck>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    year: { type: String, required: true },
    color: { type: String, required: true },
    plates: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default model("Truck", truckSchema);
