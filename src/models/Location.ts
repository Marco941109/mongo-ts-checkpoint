import { Schema, model } from "mongoose";


export interface ILocation extends Document {
  user: Schema.Types.ObjectId;
  address: string;
  place_id: string;
  latitude: number;
  longitude: number;
}

const locationSchema = new Schema<ILocation>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    address: { type: String, required: true },
    place_id: { type: String, required: true, unique: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  { timestamps: true }
);

export default model<ILocation>("Location", locationSchema);
