import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express';
import User from '../models/user';

interface reqUser  {
    _id: string;
    email: string;
    role: string;
}

export const adminAuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

        if (typeof decoded === 'string') {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const user = await User.findById(decoded._id);
        if (!user || user.role !== 'admin') {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.user  = {
            _id: user._id.toString(),
            email: user.email,
            role: user.role
        }
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Unauthorized' });
    }
};