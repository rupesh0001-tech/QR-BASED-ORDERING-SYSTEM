import express from 'express';
import { getMenu } from '../controllers/get.menu';


const router = express.Router();


router.get('/:tableId/menu', getMenu);

export default router;