import { Schema, model } from "mongoose";
import { SneakerType } from "../types/types";

const sneakerSchema = new Schema<SneakerType>({
  brand: { type: String, required: true },
  image: { type: String, required: true },
  model: String,
  name: { type: String, required: true },
  price: { type: Number, required: true },
  gender: { type: String, required: true, enum: ["Hombre", "Mujer"] },
  size: {
    type: Number,
    required: true,
    enum: [
      25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5, 30, 30.5, 31, 32, 33,
      34, 35, 36,
    ],
  },
});

export const SneakerModel = model<SneakerType>("Sneaker", sneakerSchema);
