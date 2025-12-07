import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();


// -------------------- import folders --------------------
import connectDB from "./db/db";


// -------------------- import functions and vars  --------------------
connectDB();

const app = express();

// -------------------- Middlewares --------------------
app.use(express.json());
app.use(cors());

// -------------------- Test Route --------------------
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "API is running..." });
});

// -------------------- 404 Handler --------------------
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "API not found",
  });
});

// -------------------- Error Handler --------------------
app.use(
  (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
);

// -------------------- Server --------------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
