import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
      size: String,
      color: String
    }
  ],
  totalAmount: Number,
  paymentStatus: { type: String, default: "Pending" },
  orderStatus: { type: String, default: "Processing" },
  address: Object
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
