import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, default: "Memphisian" },
  description: { type: String },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  sizes: { type: [String] },
  colors: { type: [String] },
  images: { type: [String], required: true },
  stock: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model("Product", productSchema);
