import express from 'express'
import { adminLogin } from '../controllers/adminLogin';

const router = express.Router();

// ------------------- admin routes -------------------


// POST api/admin/login
router.post('/login',  adminLogin);

export default router;