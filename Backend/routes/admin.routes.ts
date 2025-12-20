import express from 'express'
import { adminLogin } from '../controllers/adminLogin';
import { createTable } from '../controllers/genrate.table.qr';

const router = express.Router();

// ------------------- admin routes -------------------


// POST api/admin/login
router.post('/login',  adminLogin);
router.post('/create-table',  createTable);

export default router;