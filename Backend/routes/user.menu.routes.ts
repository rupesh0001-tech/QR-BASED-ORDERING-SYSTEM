import express from 'express';
import { getMenu } from '../controllers/get.menu';
import { createOrder } from '../controllers/order.item';


const router = express.Router();


router.get('/:tableId/menu', getMenu);
router.post('/:tableId/order/create', createOrder);

export default router;