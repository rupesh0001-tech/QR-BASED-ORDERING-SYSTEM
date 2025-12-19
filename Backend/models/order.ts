
import mongoose from "mongoose";
import MenuItem from "./menuItem";
import Table from "./table";

interface OrderI extends mongoose.Document {
  order_id: number;
  table: mongoose.Schema.Types.ObjectId;
  items: {
    id: mongoose.Schema.Types.ObjectId;
    name: string;
    quantity: number;
  }[];
  order_status: string;
  total_price: number;
  payment_method: string;
  payment_status: string;
}

const orderSchema = new mongoose.Schema<OrderI>(
  {
    order_id: {
      type: Number,
      required: true,
    },
    table: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Table",
    },
    items: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "MenuItem",
        },
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],

    order_status: {
      type: String,
      required: true,
      enum: ["pending", "preparing", "ready", "delivered"],
    },
    total_price: {
      type: Number,
      required: true,
    },
    payment_method: {
      type: String,
      required: true,
      enum: ["cash", "online"],
    },
    payment_status: {
      type: String,
      required: true,
      enum: ["pending", "paid", "failed", "cancelled"],
      default : 'pending',
    },
    
  },
  {
    timestamps: true,
  }
);

orderSchema.index({order_status: 1,  createdAt: 1});

export default mongoose.model<OrderI>("Order", orderSchema);
