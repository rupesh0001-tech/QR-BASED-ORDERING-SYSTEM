import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser = require("cookie-parser");
import http from 'http';
import { Server } from "socket.io";



dotenv.config();


// -------------------- import folders --------------------
import connectDB from "./db/db";
import adminRoutes from './routes/admin.routes'
import userMenuRoutes from './routes/user.menu.routes'


// -------------------- import functions and vars  --------------------
connectDB();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    credentials: true
  }
})
app.use(cookieParser())

// -------------------- Middlewares --------------------
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// -------------------- Test Route --------------------
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "API is running..." });
});


// --------------------  Routes --------------------
app.use('/api/admin', adminRoutes );
app.use('/api', userMenuRoutes );


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

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
