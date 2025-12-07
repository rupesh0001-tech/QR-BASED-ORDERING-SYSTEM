import mongoose, { Schema, Document } from "mongoose";

export interface IPayment extends Document {
  orderId: mongoose.Types.ObjectId;       // reference to order     
  amount: number;                         // total payment amount
  currency: string;                       // INR, USD etc
  status: "PENDING" | "SUCCESS" | "FAILED" | "REFUNDED";
  provider?: "RAZORPAY" | "STRIPE" | "PAYPAL" | "CASH";
  transactionId?: string;                 // razorpay_payment_id etc.
  signature?: string;                     // razorpay_signature
  createdAt: Date;
  updatedAt: Date;
}

const PaymentSchema: Schema<IPayment> = new Schema(
  {
    orderId: {
      type: Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    currency: {
      type: String,
      default: "INR",
    },

    status: {
      type: String,
      enum: ["PENDING", "SUCCESS", "FAILED", "REFUNDED"],
      default: "PENDING",
    },

    transactionId: {
      type: String,
    },

    signature: {
      type: String,
    },
  },
  {
    timestamps: true, // this gives createdAt + updatedAt
  }
);

export const Payment = mongoose.model<IPayment>("Payment", PaymentSchema);
