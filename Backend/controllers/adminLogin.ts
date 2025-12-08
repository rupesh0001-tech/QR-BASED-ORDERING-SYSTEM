import { Request, Response } from "express";
import User from "../models/user";
import bcrypt from "bcrypt";

export const adminLogin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        // check missing fields
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required",
            });
        }

        // find admin
        const admin = await User.findOne({ email, role: "admin" });
        if (!admin) {
            return res.status(404).json({
                message: "Admin not found",
            });
        }

        // compare password
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials",
            });
        }

        // login success
        return res.status(200).json({
            message: "Login successful",
            admin: {
                id: admin._id,
                email: admin.email,
                name: admin.name
            }
        });

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong, please try again later",
            error: error instanceof Error ? error.message : error
        });
    }
};

