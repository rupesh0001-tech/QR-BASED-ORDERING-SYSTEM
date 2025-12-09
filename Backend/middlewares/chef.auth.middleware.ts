import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express';
import User from '../models/user';


export const chefAuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(404).json({
                message : ' token not found ',
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        if (typeof decoded === 'string') {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const user = await User.findById(decoded._id);
        if (!user || user.role !== 'chef') {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = {
            _id: user._id.toString(),
            email: user.email,
            role: user.role
        }
        next();
    }catch(error){
        return res.status(401).json({ message: 'Unauthorized' });
    }
    
}   