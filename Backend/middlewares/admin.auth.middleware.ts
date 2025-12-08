import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express';
import User from '../models/user';

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

        const user = await User.findById(decoded.id);
        if (!user || user.role !== 'admin') {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Unauthorized' });
    }
};