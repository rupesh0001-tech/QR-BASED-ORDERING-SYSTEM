import mongoose from "mongoose";
import MenuItem from "./menuItem";
import Table from "./table";

interface OrderI extends mongoose.Document {
  order_id: string;
  table_number: mongoose.Schema.Types.ObjectId;
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
      type: String,
      required: true,
      unique: true,
    },
    table_number: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Table",
    },
    items: [
      {
        id: {
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

export default mongoose.model<OrderI>("Order", orderSchema);
